# Contributing

The repository is released under the MIT license, and follows a standard Github development process, using Github tracker for issues and merging pull requests into main.

## Development

```shell
$ npm install          # Node ^22.22.2 || >=24.15.0
$ npm run dev          # Vite dev server with the root index.html
$ npm run lint         # ESLint (flat config, @antfu/eslint-config)
$ npm run lint:style   # Stylelint for src/**/*.{css,scss}
$ npm test             # Jest
$ npm run package      # build dist/ and assemble .release/
```

`index.html` in the repository root is the Vite dev entry and imports `src/` directly. `static/index.html` is the GitHub Pages demo: it loads the bundled `h5-video-player.umd.js` through a `<script>` tag and is deployed by `npm run build:deployment`.

The build produces three artifacts in `dist/`: `h5-video-player.esm.js` (the package entry, ESM only), `h5-video-player.umd.js` and `h5-video-player.umd.min.js` (browser script tags and CDN). Styles are compiled from `src/style/index.module.scss` and injected into the document at runtime, so no CSS file is shipped separately.

## Repository settings required by the bots

`.github/workflows/dependabotAutoMerge.yml` merges non-major Dependabot pull requests automatically. Three settings cannot be expressed in code and must be enabled by a maintainer:

1. **Settings → Actions → General → Workflow permissions**: choose *Read and write permissions*. Dependabot opens its pull requests from branches inside this repository, which is why the `pull_request` event can hand `GITHUB_TOKEN` a write token there. Pull requests from forks stay read-only, and the workflow skips them through the `head.repo.full_name` guard.
2. **Settings → General**: enable *Allow auto-merge*.
3. **Branch protection on `main`**: block force pushes and deletions, but leave *Require status checks to pass before merging* **off**. `semantic-release` pushes `chore(release): … [skip ci]` straight to `main`, and GitHub rejects that push while a required check is configured. A repository owned by a personal account cannot add the GitHub Actions app to a ruleset bypass list either, so there is no way to have both.

The CI gate for Dependabot lives in `dependabotAutoMerge.yml` instead: it polls the aggregated `Test CI Summary` check before asking for a squash merge. `Test CI` reports one check per matrix cell (`test (22, ubuntu-latest)` and so on), so the `test-status` job aggregates them into that single, stable name.

`Test CI` keeps the write token away from the steps that execute repository code: the `test` job is read-only, and the semantic-release dry-run lives in its own `release-dry-run` job gated to trusted branches.

If write permissions cannot be granted to `pull_request` runs at all, switch the trigger of `dependabotAutoMerge.yml` to `pull_request_target`. `dependabot/fetch-metadata` never checks out the pull request code, so the elevated token stays out of the fork's reach.

## Release

`release.yml` publishes through **npm trusted publishing (OIDC)** — no long-lived `NPM_TOKEN` is used — and mirrors the release to the GitHub Package Registry. npm requires a trusted publisher entry for the package before the first OIDC release:

1. npmjs.com → `@cycjimmy/h5-video-player` → Settings → Trusted Publishing → *Add*.
2. Publisher: **GitHub Actions**, Organization: `cycjimmy`, Repository: `h5-video-player`, Workflow filename: `release.yml`, Environment: empty.

If OIDC publishing has to be disabled temporarily, add `NPM_TOKEN` back to `release.yml` and set the secret; the release job already declares `id-token: write`, which npm ignores when a token is present.

## Labels

The triage bot and the issue forms reference labels that have to exist in the repository. `issues.addLabels` fails with `422` for unknown labels, so keep this list in sync when a rule changes:

| Label | Used by |
| --- | --- |
| `bug` | `bug_report.yml` form |
| `enhancement` | `feature_request.yml` form |
| `needs-info` | triage rule 3, plus the 7-day lifecycle in `stale.yml` |
| `triaged` | maintainers; exempts an issue from both stale lifecycles |
| `stale` | `stale.yml` |
| `playback` | triage rule 1 |
| `orientation` | triage rule 2 |
| `ci` | `dependabot.yml` (github-actions updates) |
| `dependencies` | `dependabot.yml` (all updates) |

`gh label create` fails for a label that already exists; use `gh label edit <name> --description "..."` to update one in place.

```shell
gh label create bug         --color ee0701 --description "Something is not working"
gh label create enhancement --color 84b6eb --description "New feature or request"
gh label create needs-info  --color fbca04 --description "Waiting for more information from the reporter"
gh label create triaged     --color 0e8a16 --description "Reviewed by a maintainer"
gh label create stale       --color eeeeee --description "No recent activity"
gh label create playback    --color 1d76db --description "Playback / autoplay problems"
gh label create orientation --color 5319e7 --description "Orientation / rotation / fullscreen problems"
gh label create ci          --color 0052cc --description "GitHub Actions workflow updates"
```
