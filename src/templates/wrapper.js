import isArray from '@cycjimmy/awesome-js-funcs/judgeBasic/isArray'
import isObject from '@cycjimmy/awesome-js-funcs/judgeBasic/isObject'
import isString from '@cycjimmy/awesome-js-funcs/judgeBasic/isString'

/**
 * Render the video wrapper markup.
 *
 * @param options The template options.
 * @param options.style The generated CSS module class names.
 * @param options.source The video source.
 * @param options.orientation `'portrait'` or `'landscape'`.
 * @returns The video wrapper markup.
 */
export default (options) => {
  const {
    style,
    source,
    orientation,
  } = options

  /**
   * Build the `<source>` tags for the configured video source.
   *
   * @returns The generated `<source>` markup.
   */
  const handleSourceHtml = () => {
    if (isArray(source)) {
      return source
        .map(s => `<source src="${s.url}" type="video/${s.type}">`)
        .reduce((previous, current) => previous + current, '')
    }
    if (isObject(source)) {
      return `<source src="${source.url}" type="video/${source.type}">`
    }
    if (isString(source)) {
      return `<source src="${source}">`
    }
    return ''
  }

  return `
<div class="${style.videoWrapperForConstraintRatio}">
  <video class="${style.video}" width="100%" preload="auto"
  x-webkit-airplay="allow" webkit-playsinline="true" playsinline
  x5-video-player-type="h5" x5-video-player-fullscreen="true"
  x5-video-orientation="${orientation}">
    ${handleSourceHtml(source)}
    I'm sorry; your browser doesn't support HTML5 video.
  </video>
</div>
`
}
