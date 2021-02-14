import { css } from '@emotion/core'
import tw from 'tailwind.macro'

export default css`
  html {
    ${tw`font-sans text-theme-indigo`};
    font-size: calc(18px + 6 * ((100vw - 320px) / 1280));
    scroll-behavior: smooth;
  }

  body {
    ${tw`bg-white`};
    scroll-behavior: smooth;
  }

  a {
    ${tw`break-words`};
  }
`

/* 
  calc([size-min]em + ([size-max] - [size-min]) * ((100vw - [start]em) / ([start] - [stop])))
  calc(2.25em + (2.75) * ((100vw - 25em) / (50)))
  calc(18px + 6 * ((100vw - 320px) / 1280))
*/