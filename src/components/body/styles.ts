// import { css } from '@emotion/core'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { headingStyles } from '../index-body/styles'

export const TextContainer = styled.div`
  ${tw`font-sans subpixel-antialiased font-light `};
  & h2 {
    ${headingStyles};
    ${tw`pb-8 text-2xl  sm:text-5xl`};
  }
  & h3 {
    ${headingStyles};
    ${tw`pb-6 text-xl `};
  }
  & h4 {
    ${headingStyles};
    ${tw`pb-6 text-lg font-semibold `};
  }
  & h5 {
    ${tw`pb-3 font-semibold  text-md`};
  }
  & h6 {
    ${tw`pb-1 text-sm font-semibold `};
  }
  & p {
    ${tw`text-sm `};
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
  & a {
    ${tw`font-semibold leading-tight  text-theme-indigo`};
  }
`

export const DescriptionContainer = styled.div`
  ${tw`font-sans text-xs subpixel-antialiased font-light `};
  & h2 {
    ${headingStyles};
    ${tw`pb-2 text-xl  sm:text-3xl`};
  }
  & h3 {
    ${headingStyles};
    ${tw`pb-2 text-lg `};
  }
  & h4 {
    ${headingStyles};
    ${tw`pb-1 font-semibold  text-md`};
  }
  & h5 {
    ${tw`pb-1 font-semibold  text-md`};
  }
  & h6 {
    ${tw`text-sm font-semibold `};
  }
  & p {
    ${tw`text-xs `};
    &:not(:last-of-type) {
      ${tw`pb-2 `};
    }
  }
  & ul {
    ${tw`py-2 text-left `};
  }
  & li {
    ${tw`text-xs `};
    text-indent: 1.5rem;
    &:not(:last-of-type) {
      ${tw`pb-2 `};
    }
  }
  & a {
    ${tw`font-semibold leading-tight  text-theme-indigo`};
  }
`
