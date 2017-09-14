# h5-video-player

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![devDependencies Status][david-dev-image]][david-dev-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]
[![npm license][license-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/h5-video-player.svg?style=flat-square
[npm-url]: https://npmjs.org/package/h5-video-player
[travis-image]: https://img.shields.io/travis/cycjimmy/h5-video-player.svg?style=flat-square
[travis-url]: https://travis-ci.org/cycjimmy/h5-video-player
[david-image]: https://img.shields.io/david/cycjimmy/h5-video-player.svg?style=flat-square
[david-url]: https://david-dm.org/cycjimmy/h5-video-player
[david-dev-image]: https://david-dm.org/cycjimmy/h5-video-player/dev-status.svg?style=flat-square
[david-dev-url]: https://david-dm.org/cycjimmy/h5-video-player?type=dev
[node-image]: https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/h5-video-player.svg?style=flat-square
[download-url]: https://npmjs.org/package/h5-video-player
[license-image]: https://img.shields.io/npm/l/h5-video-player.svg?style=flat-square

## Install
```shell
$ npm install h5-video-player --save
# or
$ yarn add h5-video-player
```

## Use
```javascript
import H5VideoPlayer from 'h5-video-player';

// init player
let videoPlayer = new H5VideoPlayer({
  source: source,
  // other options ...
}).init();

// load player
videoPlayer.load();
```

* options
  * `context`: [element] Context Wrapper Element. default: body
  * `source`: [string] video url
  * `control`: [boolean] Whether the user can control. default: false
  * `autoPlay`: [boolean] Whether to play immediately after loading. default: false
  * `autoClose`: [boolean] Whether to close immediately when the video played off. default: true
  * `orientation`: [string] landscape / portrait. default: portrait.
  * `aspectRatio`: [number] Video aspect ratio. default: 9 / 16.

* function
  * `play()`: video play
  * `pause()`: video pause
