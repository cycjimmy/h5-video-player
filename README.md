# H5 Video Player

![][workflows-badge-image]
[![libraries dependency status][libraries-status-image]][libraries-status-url]
[![libraries sourcerank][libraries-sourcerank-image]][libraries-sourcerank-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Release date][release-date-image]][release-url]
[![rollup][rollup-image]][rollup-url]
[![semantic-release][semantic-image]][semantic-url]
[![jest][jest-image]][jest-url]
[![npm license][license-image]][download-url]

* Browser full screen H5 video player. ([Demo][github-pages-url])
* **[h5-video-player](https://github.com/cycdpo/h5-video-player) has been renamed to @cycjimmy/h5-video-player for scoped NPM package.**

## Install
[![NPM version][npm-image]][npm-url]
[![NPM bundle size][npm-bundle-size-image]][npm-url]
[![npm download][download-image]][download-url]

```shell
$ npm install @cycjimmy/h5-video-player --save
# or
$ yarn add @cycjimmy/h5-video-player
```

## Use
```javascript
import H5VideoPlayer from '@cycjimmy/h5-video-player';
# OR
const H5VideoPlayer = require('@cycjimmy/h5-video-player');
```

```javascript
const videoPlayer = new H5VideoPlayer(source, [, options]);
videoPlayer.load();
```

* `source`: Video source allows three types
  * [String]: Video url. E.g: `'video.mp4'`
  * [Object]: Video url and type. E.g: `{url: 'video.mp4', type:'mp4'}`
  * [Array]: E.g: `[{url: 'video.mp4', type:'mp4'},{},...]`
* options
  * `context`: [Element|String] Context Wrapper Element. Default `'body'`.
  * `control`: [Boolean] Whether the user can control. Default `false`.
  * `autoPlay`: [Boolean] Whether to play immediately after loading. Default `false`.
  * `autoClose`: [Boolean] Whether to close immediately when the video played off. Default `true`.
  * `preload`: [Boolean] Whether to preload the video. Default `true`.
  * `orientation`: [String] landscape / portrait. Default `'portrait'`.
  * `aspectRatio`: [Number] Set video aspect ratio. Default `9 / 16`(when orientation is portrait) or `16 / 9`(when orientation is landscape).
  * `disableRotation`: [Boolean] Whether to prohibit automatic rotation. Default `false`.
  * `picMode`: [Boolean] picture mode (no playButton). Default `false`.
  * `fixAndroidWechatContinue`: [Boolean] Whether compatible with Wechat(Android) play after Forced to pause. Default `false`.
  * `hooks`: [Object<Function>] The hook function
    * `play`: [Function] The hook function when the video play.
    * `pause`: [Function] The hook function when the video pause.
    * `stop`: [Function] The hook function when the video stop.

* function
  * `load()`: init video
  * `play()`: video play
  * `pause()`: video pause

### Use in browser
```html
<div id="videoWrapper"></div>
<script src="h5-video-player.umd.min.js"></script>
<script>
  const source = 'media/video.mp4';
  const video = new H5VideoPlayer(source, {
    context: '#videoWrapper',
    [...options]
  }).load();
</script>
```

## CDN
[![jsdelivr][jsdelivr-image]][jsdelivr-url]

To use via a CDN include this in your HTML:
```text
<script src="https://cdn.jsdelivr.net/npm/@cycjimmy/h5-video-player@3/dist/h5-video-player.umd.min.js"></script>
```

<!-- Links: -->
[npm-image]: https://img.shields.io/npm/v/@cycjimmy/h5-video-player
[npm-url]: https://npmjs.org/package/@cycjimmy/h5-video-player
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/min/@cycjimmy/h5-video-player

[download-image]: https://img.shields.io/npm/dt/@cycjimmy/h5-video-player
[download-url]: https://npmjs.org/package/@cycjimmy/h5-video-player

[jsdelivr-image]: https://img.shields.io/jsdelivr/npm/hy/@cycjimmy/h5-video-player
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@cycjimmy/h5-video-player

[workflows-badge-image]: https://github.com/cycjimmy/h5-video-player/workflows/Test%20CI/badge.svg

[libraries-status-image]: https://img.shields.io/librariesio/release/npm/@cycjimmy/h5-video-player
[libraries-sourcerank-image]: https://img.shields.io/librariesio/sourcerank/npm/@cycjimmy/h5-video-player
[libraries-status-url]: https://libraries.io/github/cycjimmy/h5-video-player
[libraries-sourcerank-url]: https://libraries.io/npm/@cycjimmy%2Fh5-video-player

[coverage-image]: https://img.shields.io/coveralls/github/cycjimmy/h5-video-player
[coverage-url]: https://coveralls.io/github/cycjimmy/h5-video-player

[release-date-image]: https://img.shields.io/github/release-date/cycjimmy/h5-video-player
[release-url]: https://github.com/cycjimmy/h5-video-player/releases

[rollup-image]: https://img.shields.io/github/package-json/dependency-version/cycjimmy/h5-video-player/dev/rollup
[rollup-url]: https://github.com/rollup/rollup

[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

[jest-image]: https://img.shields.io/badge/tested_with-jest-99424f.svg
[jest-url]: https://github.com/facebook/jest

[license-image]: https://img.shields.io/npm/l/@cycjimmy/h5-video-player

[github-pages-url]: https://cycjimmy.github.io/h5-video-player/
