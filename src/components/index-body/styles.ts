import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import * as frame from './frame.svg'
import * as frameWhite from './frame-white.svg'

export const mainStyles = css`
  ${tw`w-full `};
`

export const sectionStyles = css`
  ${tw`relative pb-20 my-10 `};

  & > div > div {
    ${tw`flex flex-col items-center justify-center md:flex-row`};
  }

  &  > div > div h2 {
    ${tw` md:pr-8`};
    line-height: 0.75;
  }
`

export const headingStyles = css`
  ${tw`font-sans font-semibold leading-tight text-theme-indigo`};
`

export const frameHeadingStyles = css`
  ${tw`inline-flex flex-row flex-no-wrap items-center justify-center `};

  &::before,
  &::after {
    ${tw`flex-1 block h-full mx-2 text-transparent bg-center bg-no-repeat bg-contain `};
    background-image: url(${frame});
    content: '.......';
  }
  &::before {
    transform: rotateZ(180deg);
  }
`

export const frameWhiteHeadingStyles = css`
  ${frameHeadingStyles};

  &::before,
  &::after {
    background-image: url(${frameWhite});
  }
`

export const TextContainer = styled.div`
  ${tw`relative w-full max-w-xl px-4 mx-auto font-sans subpixel-antialiased font-light text-center `};

  & h1 {
    ${headingStyles};
    ${frameHeadingStyles};
    ${tw`pt-12 pb-10 text-3xl sm:text-5xl`};
  }
  & h2 {
    ${headingStyles};
    ${tw`pt-10 pb-8 text-2xl sm:text-5xl`};
  }
  & h3 {
    ${headingStyles};
    ${tw`pt-8 pb-6 text-xl `};
  }
  & h4 {
    ${headingStyles};
    ${tw`pt-8 pb-6 text-lg font-semibold `};
  }
  & h5 {
    ${tw`pt-4 pb-3 font-semibold text-md`};
  }
  & h6 {
    ${tw`pt-2 pb-1 text-sm font-semibold `};
  }
  & p {
    ${tw`text-sm text-justify `};
    &:not(:last-of-type) {
      ${tw`pb-4 `};
    }
  }
  & ul {
    ${tw`py-4 text-left `};
  }
  & li {
    ${tw`text-sm `};
    text-indent: 3rem;
    &:not(:last-of-type) {
      ${tw`pb-4 `};
    }
  }
`

export const imageStyles = css`
  ${tw`w-screen overflow-hidden md:h-screen`};
`

export const imgStyles = css`
  ${tw`h-full `};
`

export const imageSectionStyles = css`
  ${tw`relative w-full my-10 `};
`

export const buttonWrapperStyles = css`
  ${tw`absolute inset-0 flex items-center justify-center p-4 `};
`

export const buttonStyles = css`
  ${tw`w-3/4 cursor-pointer md:w-1/2`};

  & * {
    transition: all 200ms ease-in-out;
  }

  &:hover {
    & #shade {
      fill: #29b2c0;
    }
    & #back {
      fill: #ee5658;
    }
  }
`

export const videoFrameStyles = css`
  ${tw`relative h-full overflow-hidden`};

  & iframe {
    ${tw`absolute inset-0 h-full `};

    width: 101%;
  }
`

export const rowStyles = css`
  ${tw`items-center `};
`

export const imagesStyles = css`
  ${tw`w-full max-w-xl px-8 pt-12 mx-auto `};
`

export const linksStyles = css`
  ${tw`py-12 `};
`

export const frameStyles = css`
  ${tw`w-full h-full bg-gray-400 `};
`

export const faqStyles = css`
  ${tw`block mx-auto mt-10 mb-20 `};
`

export const copyStyles = css`
  ${tw`relative w-full pt-10 text-white bg-theme-indigo`};

  & a {
    ${tw`underline `};
  }

  & div {
    ${tw`flex flex-col justify-between w-full md:flex-row`};
  }
  & p {
    ${tw`px-4 text-xxs`};
  }
`

export const digitsStyles = css`
  ${tw`relative flex flex-row flex-wrap items-center justify-center w-full max-w-5xl px-4 pt-20 pb-10 `};

  & > div {
    ${tw`mx-0 mb-10 md:max-w-1/3`};
  }
  & > div h2 {
    ${tw`pt-1 pb-0 text-5xl whitespace-no-wrap md:text-6xl`};
  }
  & > div p {
    ${tw`text-center `};
  }
`

export const smallDigitsStyles = css`
  ${tw`relative flex flex-row flex-wrap items-center justify-center w-full max-w-5xl px-4 -mx-8 md:flex-no-wrap`};

  & > div {
    ${tw`mx-0 mb-10 text-center md:w-1/5`};
  }
  & > div h2 {
    ${tw`pt-1 pb-0 text-3xl whitespace-no-wrap md:text-5xl`};
  }
  & > div p {
    ${tw`text-center `};
  }
`
