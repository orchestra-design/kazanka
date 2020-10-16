// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { headingStyles } from '../index-body/styles'

export const TextContainer = styled.div`
  ${tw`
    font-sans
    font-light
    subpixel-antialiased
  `};
  & h2 {
    ${headingStyles};
    ${tw`
      text-2xl sm:text-5xl
      pb-8
    `};
  }
  & h3 {
    ${headingStyles};
    ${tw`
      text-xl
      pb-6
    `};
  }
  & h4 {
    ${headingStyles};
    ${tw`
      font-semibold
      text-lg
      pb-6
    `};
  }
  & h5 {
    ${tw`
      font-semibold
      text-md
      pb-3
    `};
  }
  & h6 {
    ${tw`
      font-semibold
      text-sm
      pb-1
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
  & a {
    ${tw`
      font-semibold
      leading-tight
      text-theme-indigo
    `};
  }
`

export const DescriptionContainer = styled.div`
  ${tw`
    font-sans
    font-light
    subpixel-antialiased
    text-xs
  `};
  & h2 {
    ${headingStyles};
    ${tw`
      text-xl sm:text-3xl
      pb-2
    `};
  }
  & h3 {
    ${headingStyles};
    ${tw`
      text-lg
      pb-2
    `};
  }
  & h4 {
    ${headingStyles};
    ${tw`
      font-semibold
      text-md
      pb-1
    `};
  }
  & h5 {
    ${tw`
      font-semibold
      text-md
      pb-1
    `};
  }
  & h6 {
    ${tw`
      font-semibold
      text-sm
    `};
  }
  & p {
    ${tw`
      text-xs
      text-justify
    `};
    &:not(:last-of-type) {
      ${tw`
        pb-2
    `};
    }
  }
  & ul {
    ${tw`
      text-left
      py-2
    `};
  }
  & li {
    ${tw`
      text-xs
    `};
    text-indent: 1.5rem;
    &:not(:last-of-type) {
      ${tw`
        pb-2
    `};
    }
  }
  & a {
    ${tw`
      font-semibold
      leading-tight
      text-theme-indigo
    `};
  }
`
