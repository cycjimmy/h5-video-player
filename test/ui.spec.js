import H5VideoPlayer from '../build/h5-video-player.min';

describe('ui spec', () => {
  const
    videoWrapper = document.createElement('div')
    , source = 'https://cycjimmy.github.io/staticFiles/media/Sony_test_video_1280x720.mp4'
  ;

  videoWrapper.style.width = '360px';
  videoWrapper.style.height = '640px';

  const
    videoDefault = new H5VideoPlayer(source, {
      context: videoWrapper,
      control: true,
    }).load()
  ;

  test('videoDefault.container.parentNode should be videoWrapper', () => {
    expect(videoDefault.els.container.parentNode).toBe(videoWrapper);
  });
});
