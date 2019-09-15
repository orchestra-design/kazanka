import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

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
    font-serif font-bold
    text-3xl sm:text-5xl
    text-white text-center
    pb-10
  `};
  text-shadow: 0px 0px 10px #1f5fc2;
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
  `};
`

export const TextContainer = styled.div`
  ${tw`
    mx-auto
    w-full max-w-xl
    subpixel-antialiased
    text-center
  `};

  & h1 {
    ${headingStyles};
    ${tw`
      text-3xl sm:text-5xl
      pt-12 pb-6
    `};
  }
  & h2 {
    ${headingStyles};
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
  & p {
    ${tw`
      text-sm
    `};
    &:not(:last-of-type) {
      ${tw`
        pb-4
    `};
    }
  }
`

export const imageStyles = css`
  ${tw`w-full`};
  &::after {
    ${tw`block absolute inset-0`};
    content: '';
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`

export const imageSectionStyles = css`
  ${tw`relative w-full`};
`

export const buttonWrapperStyles = css`
  ${tw`
    absolute inset-0
    flex items-center justify-center
  `};
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