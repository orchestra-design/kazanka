import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { useUpdateEffect, useVideo } from 'react-use'

export function BackVideo({ video }) {
  const [VideoBlock, state, controls] = useVideo(
    <video
      src={video.url}
      autoPlay
      loop
      muted
      type="video/mp4"
    />
  );

  useUpdateEffect(async () => {
    if (state.paused) {
      try {
        await controls.play()
      } catch (ignore) {
        // ignore
      }
    }
  }, [state.paused])

  return (
    <div
      css={css`
        ${tw`
          absolute
          w-screen h-screen
          inset-0
          opacity-0
          flex items-center justify-center
        `};
        ${!state.paused && tw`opacity-100`};
        transition: opacity 200ms ease-in-out;
        & > video {
          ${tw`
            block
            h-screen w-screen
          `};
          object-fit: cover;
        }
      `}
    >
      {VideoBlock}
    </div>
  )
}
