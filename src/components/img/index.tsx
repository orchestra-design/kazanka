import * as React from 'react'
import styled from '@emotion/styled'
import { get } from 'lodash'
import GatsbyImage from 'gatsby-image'
import tw from 'tailwind.macro'

import { Image as ImageProps } from '../../typings/image'

const Holder = styled('div')`
  ${tw`
    flex items-center justify-center
    bg-white
    h-full w-full
    overflow-hidden
  `};
`

const Image = styled('img')`
  ${tw`w-full`};
`

interface ImgProps {
  src: ImageProps
  css?: any
  className?: string
}

export function Img({ src, ...props }: ImgProps) {
  const imageSharp = get(src, 'localFile.childImageSharp')
  const fluid = get(imageSharp, 'fluid')
  const fixed = get(imageSharp, 'fixed')
  const url = get(src, 'url')

  if (fluid) {
    return <GatsbyImage fluid={fluid} {...props} />
  }

  if (fixed) {
    return <GatsbyImage fixed={fixed} {...props} />
  }

  if (url) {
    return (
      <Image src={url} {...props} alt={get(src, 'alt', '')} loading="lazy" />
    )
  }

  return <Holder {...props} />
}
