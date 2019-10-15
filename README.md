# H5 Video Player

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]
[![npm download][download-image]][download-url]
[![jsdelivr][jsdelivr-image]][jsdelivr-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/@cycjimmy/h5-video-player.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@cycjimmy/h5-video-player
[travis-image]: https://img.shields.io/travis/cycjimmy/h5-video-player.svg?style=flat-square
[travis-url]: https://travis-ci.org/cycjimmy/h5-video-player
[david-image]: https://img.shields.io/david/cycjimmy/h5-video-player.svg?style=flat-square
[david-url]: https://david-dm.org/cycjimmy/h5-video-player
[david-dev-image]: https://david-dm.org/cycjimmy/h5-video-player/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/cycjimmy/h5-video-player?type=dev
[download-image]: https://img.shields.io/npm/dm/@cycjimmy/h5-video-player.svg?style=flat-square
[download-url]: https://npmjs.org/package/@cycjimmy/h5-video-player
[jsdelivr-image]: https://data.jsdelivr.com/v1/package/npm/@cycjimmy/h5-video-player/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/@cycjimmy/h5-video-player
[license-image]: https://img.shields.io/npm/l/@cycjimmy/h5-video-player.svg?style=flat-square

* Browser full screen H5 video player. ([Releases](https://github.com/cycjimmy/h5-video-player/releases) | [Demo](https://cycjimmy.github.io/h5-video-player/))
* **[h5-video-player](https://github.com/cycdpo/h5-video-player) has been renamed to @cycjimmy/h5-video-player for scoped NPM package.**

## Install
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
<script src="h5-video-player.min.js"></script>
<script>
  var source = 'media/video.mp4';
  var video = new H5VideoPlayer(source, {
    context: '#videoWrapper',
    [...options]
  }).load();
</script>
```

## CDN
To use via a CDN include this in your html:
```text
<script src="https://cdn.jsdelivr.net/npm/@cycjimmy/h5-video-player@2/build/h5-video-player.min.js"></script>
```

