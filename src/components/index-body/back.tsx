import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { useUpdateEffect, useVideo } from 'react-use'

import { Img } from '../img/index'
import { Shape } from '../shape/index'

export function Back({ image, video }) {
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
          overflow-hidden
        `};
        top: 0;
      `}
    >
      <div
        css={css`
          ${tw`absolute inset-0 object-center object-cover`};
          &::after {
            ${tw`block absolute inset-0`};
            content: '';
            background: linear-gradient(180deg, rgba(41, 178, 192, 0) 0%, rgba(41, 178, 192, 1) 100%);
          }
        `}
      >
        <Img
          src={image}
          css={css`
            ${tw`w-full h-full`};
          `}
        />
        <div
          css={css`
            ${tw`
              absolute
              w-screen h-screen
              inset-0
              opacity-0
            `};
            ${!state.paused && tw`opacity-100`};
            transition: opacity 200ms ease-in-out;
            & > video {
              ${tw`
                block
                absolute inset-0
                w-screen h-screen
              `};
              object-fit: cover;
            }
          `}
        >
          {VideoBlock}
        </div>
        <Shape
          css={css`
            ${tw`
              absolute
              w-full
              z-10
            `};
            bottom: -1.5em;
          `}
        />
      </div>
    </div >
  )
}
