import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import * as frame from './frame.svg'
import * as frameWhite from './frame-white.svg'

export const mainStyles = css`
  ${tw`
    w-full
  `};
`

export const jumboStyles = css`
  ${tw`
    flex items-center justify-center
    w-full
    md:h-screen
    relative
  `};
`

export const sectionStyles = css`
  ${tw`
    my-10 pb-40
    relative
  `};
`

export const headingStyles = css`
  ${tw`
    font-sans
    font-bold
    leading-tight
    text-theme-indigo
  `};
`

export const frameHeadingStyles = css`
  ${tw`
    inline-flex flex-row flex-no-wrap
    items-center justify-center
  `};

  &::before,
  &::after {
    ${tw`
      block flex-1
      h-full
      bg-center bg-contain bg-no-repeat
      text-transparent
      mx-2
    `};
    background-image: url(${frame});
    content: '.......';
  }
  &::before {
    transform: rotateZ(180deg)
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
  ${tw`
    font-sans
    font-light
    mx-auto
    w-full max-w-xl
    subpixel-antialiased
    text-center
    relative
    px-4
  `};

  & h1 {
    ${headingStyles};
    ${frameHeadingStyles};
    ${tw`
      text-3xl sm:text-5xl
      pt-12 pb-10
    `};
  }
  & h2 {
    ${headingStyles};
    ${frameHeadingStyles};
    ${tw`
      text-2xl sm:text-3xl
      pt-10 pb-8
    `};
  }
  & h3 {
    ${headingStyles};
    ${frameHeadingStyles};
    ${tw`
      text-xl
      pt-8 pb-6
    `};
  }
  & h4 {
    ${headingStyles};
    ${tw`
      font-semibold
      text-lg
      pt-8 pb-6
    `};
  }
  & h5 {
    ${tw`
      font-semibold
      text-md
      pt-4 pb-3
    `};
  }
  & h6 {
    ${tw`
      font-semibold
      text-sm
      pt-2 pb-1
    `};
  }
  & p {
    ${tw`
      text-sm
      text-justify
    `};
    &:not(:last-of-type) {
      ${tw`
        pb-4
    `};
    }
  }
  & ul {
    ${tw`
      text-left
      py-4
    `};
  }
  & li {
    ${tw`
      text-sm
    `};
    text-indent: 3rem;
    &:not(:last-of-type) {
      ${tw`
        pb-4
    `};
    }
  }
`

export const imageStyles = css`
  ${tw`
    w-screen md:h-screen
    overflow-hidden
  `};
`

export const imgStyles = css`
  ${tw`
    h-full
  `};
`

export const imageSectionStyles = css`
  ${tw`
    relative w-full
    my-10
  `};
`

export const buttonWrapperStyles = css`
  ${tw`
    absolute inset-0
    flex items-center justify-center
    p-4
  `};
`

export const buttonStyles = css`
  ${tw`
    cursor-pointer
    w-3/4 md:w-1/2
  `};

  & * {
    transition: all 200ms ease-in-out;
  } 

  &:hover {
    & #shade {
      fill: #29B2C0;
    }
    & #back {
      fill: #EE5658;
    }
  }
`

export const videoFrameStyles = css`
  ${tw`relative h-full`};

  & iframe {
    ${tw`
      absolute inset-0
      w-full h-full
    `};
  }
`

export const rowStyles = css`
  ${tw`
    items-center
  `};
`

export const imagesStyles = css`
  ${tw`
    px-8 pt-12
    w-full max-w-xl
    mx-auto
  `};
`

export const linksStyles = css`
  ${tw`
    py-12
  `};
`

export const frameStyles = css`
  ${tw`
    w-full h-full
    bg-gray-400
  `};
`

export const faqStyles = css`
  ${tw`
    block
    mx-auto
    mb-20
    mt-10
  `};
`

export const copyStyles = css`
  ${tw`
    w-full
    py-10
    relative
    bg-theme-teal
  `};

  & a {
    ${tw`
      font-semibold
      text-theme-indigo
    `};
  }

  & div {
    ${tw`
      flex flex-col md:flex-row
      justify-between
      w-full
    `};
  }
  & p {
    ${tw`
      px-4
    `};
  }
`