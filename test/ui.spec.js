import H5VideoPlayer from '../dist/H5VideoPlayer';

describe('ui spec', () => {
  const
    videoWrapper = document.createElement('div')
    , source = 'https://cycjimmy.github.io/staticFiles/media/Sony_test_video_vertical_720x1280.mp4'
  ;

  videoWrapper.id = 'videoWrapper';
  videoWrapper.style.width = '360px';
  videoWrapper.style.height = '640px';

  let
    videoDefault = new H5VideoPlayer({
      context: videoWrapper,
      source,
      control: true,
    }).load()
  ;

  test('videoDefault.wrapper.parentNode should be videoWrapper', () => {
    expect(videoDefault.wrapper.parentNode).toBe(videoWrapper);
  });
});
