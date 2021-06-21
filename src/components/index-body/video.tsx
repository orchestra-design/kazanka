import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { get } from 'lodash'
import YouTube from 'react-youtube'

// import * as uuid from 'uuid/v1'

import { HTML } from '../html/index'
// import { Img } from '../img/index'

import {
  videoFrameStyles,
  // headingStyles,
  // frameWhiteHeadingStyles,
} from './styles'

const youTubeID = (url) => url.match(/(?:\?v=)(.*)/)[1]

const opts = (id) => ({
  height: '400',
  width: '712',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    modestbranding: 1,
    showinfo: 0,
    rel: 0,
    iv_load_policy: 3,
    controls: 1,
    enablejsapi: 0,
    disablekb: 1,
    loop: 1,
    color: 'white',
    //origin: 'http://localhost:8000/' || 'http://localhost:5000/',
    // playlist: id,
  },
})

export function Video({ items, title }) {
  const [current] = React.useState<number>(0)

  if (!get(items, [current, 'videosrc', 'embed_url'])) return null

  const id = youTubeID(items[current].videosrc.embed_url)

  function onReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute()
    event.target.setPlaybackQuality('large')
  }

  return (
    <section
      css={css`
        ${tw`w-full h-full px-8 py-4 mt-16 bg-no-repeat bg-contain bg-theme-yellow md:py-12`};
      `}
    >
      <div
        css={css`
          ${tw`flex flex-col flex-no-wrap items-center justify-center w-full mx-auto md:flex-row`};
          @media (min-width: 768px) {
            height: 60vh;
          }
        `}
      >
        <div
          css={css`
            ${tw`flex items-center justify-center w-full h-full py-8 md:py-0 md:px-8 md:w-1/3`};
            flex: 1 50%;
          `}
        >
          <HTML
            css={css`
              ${tw`max-h-full overflow-y-auto font-sans text-sm text-theme-indigo`};

              & h4 {
                ${tw`text-5xl `};
              }
            `}
          >
            {get(items, [current, 'text', 'html'], null)}
          </HTML>
        </div>
        <div
          css={css`
            ${videoFrameStyles};
            ${tw`w-full md:w-2/3`};
            flex: 1 0 50vh;

            @media (min-width: 768px) {
              flex: 1 100%;
            }
          `}
        >
          <YouTube videoId={id} opts={opts(id)} onReady={onReady} />
        </div>
      </div>
    </section>
  )
}
