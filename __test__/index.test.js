/* eslint no-undef: off */
/* eslint func-names: off */
import H5VideoPlayer from '../src/index';

describe('ui test', () => {
  beforeAll(() => {
    // mock audio events
    window.HTMLDivElement.prototype.load = () => {
      /* do nothing */
    };
    window.HTMLDivElement.prototype.play = function () {
      Object.defineProperty(this, 'paused', {
        configurable: true,
        get() {
          return false;
        },
      });
    };
    window.HTMLDivElement.prototype.pause = function () {
      Object.defineProperty(this, 'paused', {
        configurable: true,
        get() {
          return true;
        },
      });
    };
  });

  const source = 'https://cycjimmy.github.io/staticFiles/media/Sony_test_video_1280x720.mp4';

  test('default test', () => {
    const videoDefault = new H5VideoPlayer(source, {}).load();
    videoDefault.play();
    videoDefault.pause();
    expect(videoDefault.options.source).toBe(source);
    expect(videoDefault.options.control).toBe(false);
    expect(videoDefault.options.autoPlay).toBe(false);
    expect(videoDefault.options.autoClose).toBe(true);
    expect(videoDefault.options.preload).toBe(true);
    expect(videoDefault.options.orientation).toBe('portrait');
    expect(videoDefault.options.aspectRatio).toBe(9 / 16);
    expect(videoDefault.options.disableRotation).toBe(false);
    expect(videoDefault.options.picMode).toBe(false);
    expect(videoDefault.options.fixAndroidWechatContinue).toBe(false);
  });

  test('coverall', () => {
    const videoWrapper = document.createElement('div');
    videoWrapper.style.width = '360px';
    videoWrapper.style.height = '640px';

    const video1 = new H5VideoPlayer([{
      url: source,
      type: 'mp4',
    }], {
      context: videoWrapper,
      control: true,
      autoPlay: true,
      autoClose: false,
      preload: false,
      orientation: 'landscape',
      disableRotation: true,
      picMode: true,
      fixAndroidWechatContinue: true,
    }).load();
    video1.play();
    video1.pause();

    videoWrapper.style.position = 'static';
    const video2 = new H5VideoPlayer({
      url: source,
      type: 'mp4',
    }, {
      context: videoWrapper,
      control: true,
      orientation: 'landscape',
    }).load();
    video2.play();
    video2.pause();

    new H5VideoPlayer(undefined, {}).load();
  });
});
