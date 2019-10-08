import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import * as frame from './frame.svg'

export const mainStyles = css`
  ${tw`
    w-full
  `};
`

export const jumboStyles = css`
  ${tw`
    flex items-center justify-center
    w-full h-screen
    relative
  `};
`

export const titleStyles = css`
  ${tw`
    w-4/5
    max-w-xl
  `};
  padding-bottom: 20vh;
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

export const TextContainer = styled.div`
  ${tw`
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
      pt-12 pb-6
    `};
  }
  & h2 {
    ${headingStyles};
    ${frameHeadingStyles};
    ${tw`
      text-2xl sm:text-3xl
      pt-10 pb-5
    `};
  }
  & h3 {
    ${headingStyles};
    ${tw`
      text-xl
      pt-8 pb-4
    `};
  }
  & h4 {
    ${tw`
      font-semibold
      text-lg
      pt-6 pb-3
    `};
  }
  & h5 {
    ${tw`
      font-semibold
      text-md
      pt-4 pb-2
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
  box-shadow: 0px 0px 0 10px rgba(255, 73, 14, 0.65);
  transition: box-shadow 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 0 20px rgba(255, 73, 14, 0.65);
  }
`

export const videoFrameStyles = css`
  ${tw`relative`};
  padding-bottom: ${(1080 / 1920) * 100}%;

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
    mt-8
    w-full h-screen
    bg-gray-400
  `};
`