import * as React from 'react'
import { get } from 'lodash'

import { HTML } from '../html/index'

import { BodyTag } from './tag'
import { Back } from './back'
import { Body } from './body'
import { Title } from './title'
import { mainStyles, jumboStyles, sectionStyles, TextContainer } from './styles'

export function IndexBody({ data }) {
  const image = get(data, 'image')
  const video = get(data, 'video')
  const faq = get(data, 'faq')
  const body = get(data, 'body')
  const tag = get(data, 'tag', '')
  const title = get(data, 'title.text', '')
  const description = get(data, 'description.html')
  return (
    <main css={mainStyles}>
      <div css={jumboStyles}>
        <Back image={image} video={video} />
        <Title title={title} />
        <BodyTag tag={tag} textColor="#FFF" />
      </div>
      <div css={sectionStyles}>
        <TextContainer>
          <HTML>{description}</HTML>
        </TextContainer>
        <BodyTag tag={tag} textColor="#0D134A" />
      </div>
      <Body body={body} faq={faq} />
    </main>
  )
}
