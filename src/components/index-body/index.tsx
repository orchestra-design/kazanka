import * as React from 'react'
import { get } from 'lodash'

import { HTML } from '../html/index'
import { Logo } from '../logo/index'

import { BodyTag } from './tag'
import { Back } from './back'
import { Body } from './body'
import {
  mainStyles,
  jumboStyles,
  titleStyles,
  sectionStyles,
  TextContainer,
} from './styles'

export function IndexBody({ data }) {
  const image = get(data, 'image')
  const video = get(data, 'video')
  const body = get(data, 'body')
  const tag = get(data, 'tag', '')
  const title = get(data, 'title.text', '')
  const description = get(data, 'description.html')
  return (
    <div>
      <Back image={image} video={video} />
      <main css={mainStyles}>
        <div css={jumboStyles}>
          <Logo css={titleStyles} title={title} color="#FFF" />
          <h1 hidden>{title}</h1>
          <BodyTag tag={tag} textColor="#0D134A" />
        </div>
        <div css={sectionStyles}>
          <TextContainer>
            <HTML>{description}</HTML>
          </TextContainer>
          <BodyTag tag={tag} textColor="#0D134A" />
        </div>
        <Body body={body} />
      </main>
    </div>
  )
}
