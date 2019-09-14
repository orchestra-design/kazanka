import * as React from 'react'
import { get } from 'lodash'

import { HTML } from '../html/index'

import { StickedTag } from './tag'
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
  const body = get(data, 'body')
  const tag = get(data, 'tag', '')
  const title = get(data, 'title.text', '')
  const description = get(data, 'description.html')
  return (
    <div>
      <Back image={image} />
      <main css={mainStyles}>
        <div css={jumboStyles}>
          <h1 css={titleStyles}>{title}</h1>
          <StickedTag tag={tag} />
        </div>
        <div css={sectionStyles}>
          <TextContainer>
            <HTML>{description}</HTML>
          </TextContainer>
          <StickedTag tag={tag} color="#60B2FF" noStick />
        </div>
        <Body body={body} />
      </main>
    </div>
  )
}
