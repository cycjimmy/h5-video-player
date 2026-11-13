import { createRequire } from 'node:module'

import myBanner from '@cycjimmy/config-lib/esm/chore/myBanner.js'
import terserOption from '@cycjimmy/config-lib/esm/terser/4.x/production.js'
import autoprefixer from 'autoprefixer'
import { defineConfig } from 'vite'

const pkg = createRequire(import.meta.url)('./package.json')

// config-lib's shared option follows terser 4's legacy `output` key. Vite always
// injects `format` and terser rejects having both, so convert `output` → `format`.
const { output, ...restTerserOption } = terserOption
const terserOptions = { ...restTerserOption, format: output }

// Output file names follow the pkg field conventions of the old rollup configs.
const esmFileName = pkg.module.replace('dist/', '') // h5-video-player.esm.js
const umdFileName = pkg.browser.replace('dist/', '').replace('.min.js', '.js') // h5-video-player.umd.js
const umdMinFileName = pkg.browser.replace('dist/', '') // h5-video-player.umd.min.js

// Inlines the emitted CSS assets into the entry chunks as a runtime <style>
// injection, replicating the old rollup-plugin-postcss behavior so script tags
// keep working without a separate CSS file. Implemented as a micro plugin
// because vite-plugin-css-injected-by-js produces syntactically broken
// unminified output on this Vite major (module comments swallow the collapsed
// single-line injection code).
function injectCss({ banner = null } = {}) {
  return {
    name: 'inject-css',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const cssAssets = Object.keys(bundle).filter(name => name.endsWith('.css'))
      if (cssAssets.length === 0)
        return

      const css = cssAssets
        .map((name) => {
          const { source } = bundle[name]
          return source instanceof Uint8Array
            ? new TextDecoder().decode(source)
            : String(source)
        })
        .join('\n')
        .replace(/\/\*\$vite\$:\d+\*\//g, '') // strip Vite internal CSS markers
      cssAssets.forEach((name) => {
        delete bundle[name]
      })

      // Kept compact by construction: terser runs at renderChunk (before this
      // generateBundle hook), so this code is never minified afterwards.
      const injectionCode = `;(function(){try{if(typeof document!='undefined'){var e=document.createElement('style');e.appendChild(document.createTextNode(${JSON.stringify(css.trim())}));document.head.appendChild(e)}}catch(t){console.error('inject-css',t)}})();\n`

      const bannerPrefix = banner
        ? `${banner}\n`
        : ''

      for (const chunk of Object.values(bundle)) {
        if (chunk.type === 'chunk' && chunk.isEntry) {
          chunk.code = `${bannerPrefix}${injectionCode}${chunk.code}`
        }
      }
    },
  }
}

function libBuild({ formats, fileName, minify = false }) {
  return {
    target: 'es2015',
    outDir: 'dist',
    // Keep artifacts of previous incremental builds (`npm run build` cleans dist first).
    emptyOutDir: false,
    cssCodeSplit: false,
    // Replicates the old pipeline: JS unminified while the injected CSS is minified.
    cssMinify: true,
    minify,
    ...(minify === 'terser' && { terserOptions }),
    lib: {
      entry: 'src/index.js',
      name: 'H5VideoPlayer',
      formats,
      fileName: () => fileName,
    },
    rollupOptions: {
      output: {
        exports: 'default',
      },
    },
  }
}

const builds = {
  'esm': libBuild({
    formats: ['es'],
    fileName: esmFileName,
  }),
  'umd': libBuild({
    formats: ['umd'],
    fileName: umdFileName,
  }),
  'umd-min': libBuild({
    formats: ['umd'],
    fileName: umdMinFileName,
    minify: 'terser',
  }),
  'deployment': libBuild({
    formats: ['umd'],
    fileName: umdFileName,
  }),
}

export default defineConfig(({ mode }) => {
  const build = builds[mode]

  return {
    // Avoid copying static/ (or any public dir) into dist and polluting .release.
    publicDir: false,
    plugins: [
      injectCss({
        banner: mode === 'umd-min'
          ? myBanner(pkg)
          : null,
      }),
    ],
    css: {
      // Inline postcss config keeps the build setup in a single file.
      postcss: {
        plugins: [autoprefixer],
      },
      modules: {
        // Kebab-case class names in SCSS with camelCase JS keys, so the
        // exported style shape stays identical to the old rollup builds.
        localsConvention: 'camelCaseOnly',
        generateScopedName: (mode === 'development' || mode === 'deployment')
          ? '[name]__[local]' // same as the old development/deployment builds
          : '[hash:base64:10]', // same as the old production builds
      },
    },
    ...(build && { build }),
  }
})
