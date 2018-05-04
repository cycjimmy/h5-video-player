# H5 Video Player

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![jsdelivr][jsdelivr-image]][jsdelivr-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/h5-video-player.svg?style=flat-square
[npm-url]: https://npmjs.org/package/h5-video-player
[travis-image]: https://img.shields.io/travis/cycdpo/h5-video-player.svg?style=flat-square
[travis-url]: https://travis-ci.org/cycdpo/h5-video-player
[david-image]: https://img.shields.io/david/cycdpo/h5-video-player.svg?style=flat-square
[david-url]: https://david-dm.org/cycdpo/h5-video-player
[david-dev-image]: https://david-dm.org/cycdpo/h5-video-player/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/cycdpo/h5-video-player?type=dev
[node-image]: https://img.shields.io/badge/node.js-%3E=_6.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/h5-video-player.svg?style=flat-square
[download-url]: https://npmjs.org/package/h5-video-player
[jsdelivr-image]: https://data.jsdelivr.com/v1/package/npm/h5-video-player/badge
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/h5-video-player
[license-image]: https://img.shields.io/npm/l/h5-video-player.svg?style=flat-square

Browser full screen H5 video player. ([Releases](https://github.com/cycdpo/h5-video-player/releases) | [Demo](https://cycdpo.github.io/h5-video-player/))

## Install
```shell
$ npm install h5-video-player --save
# or
$ yarn add h5-video-player
```

## Use
  ```javascript
  import H5VideoPlayer from 'h5-video-player';
  # OR
  let H5VideoPlayer = require('h5-video-player');
  ```

  ```javascript
  let videoPlayer = new H5VideoPlayer(source, [, options]);
  videoPlayer.load();
  ```

* `source`: Video source allows three types
  * [String]: Video url. E.g: `'video.mp4'`
  * [Object]: Video url and type. E.g: `{url: 'video.mp4', type:'mp4'}`
  * [Array]: E.g: `[{url: 'video.mp4', type:'mp4'},{},...]`
* options
  * `context`: [Element|String] Context Wrapper Element. Default `'body'`.
  * `positioned`: [Boolean] Whether the context element has been positioned. Default `false`.
  * `control`: [Boolean] Whether the user can control. Default `false`.
  * `autoPlay`: [Boolean] Whether to play immediately after loading. Default `false`.
  * `autoClose`: [Boolean] Whether to close immediately when the video played off. Default `true`.
  * `preload`: [Boolean] Whether to preload the video. Default `true`.
  * `orientation`: [String] landscape / portrait. Default `'portrait'`.
  * `aspectRatio`: [Number] Video aspect ratio. Default `9 / 16`.
  * `disableRotation`: [Boolean] Whether to prohibit automatic rotation. Default `false`.
  * `picMode`: [Boolean] picture mode (no playButton). Default `false`.
  * `fixAndroidWechatContinue`: [Boolean] Whether compatible with Wechat(Android) play after Forced to pause. Default `false`.
  * `hookInPlay`: [Function] The hook function when the video play.
  * `hookInPause`: [Function] The hook function when the video pause.
  * `hookInStop`: [Function] The hook function when the video stop.

* function
  * `load()`: init video
  * `play()`: video play
  * `pause()`: video pause

### Use in browser
```html
<div id="videoWrapper"></div>
<script src="H5VideoPlayer.min.js"></script>
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
<script src="https://cdn.jsdelivr.net/npm/h5-video-player@1/build/H5VideoPlayer.min.js"></script>
```

