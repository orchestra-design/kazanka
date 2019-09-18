import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export const wrapperStyles = css`
  ${tw`
    fixed inset-0
    overflow-y-auto
  `};
  z-index: 98;
`

export const popupStyles = css`
  ${tw`
    relative
    flex flex-col
    items-center justify-center
    bg-white
    mx-2 my-4
    pt-10
    overflow-y-auto
  `};
  z-index: 100;
`

export const fadeStyles = css`
  ${tw`
    fixed inset-0
    bg-black
  `};
  opacity: 0.7;
  z-index: 99;
`
