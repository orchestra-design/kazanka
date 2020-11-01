import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export const wrapperStyles = css`
  ${tw`fixed inset-0 `};
  z-index: 98;
`

export const popupStyles = css`
  ${tw`fixed inset-0 flex flex-col items-center justify-center max-w-3xl mx-auto my-4 bg-white`};
  z-index: 100;
`

export const fadeStyles = css`
  ${tw`fixed inset-0 bg-black `};
  opacity: 0.7;
  z-index: 99;
`
