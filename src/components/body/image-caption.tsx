import * as React from 'react'
import { get } from 'lodash'
// import { css } from '@emotion/core'

import { HTML } from '../html/index'
import If from '../if/index'
import { Img } from '../img/index'

import { TextContainer } from './styles'

export function ImageCaption({ primary, label }) {
  if (!primary) return null

  const image = get(primary, 'iwcimage')
  const text = get(primary, 'iwctext.html')
  const isRight = label === 'imageright'

  return (
    <section className="w-full max-w-3xl mx-auto mb-12 flex flex-col md:flex-row flex-no-wrap px-8">
      <div className="md:w-1/4">
        <If predicate={!isRight && !!image}>
          <Img src={image} />
        </If>
        <If predicate={isRight && !!text}>
          <TextContainer>
            <HTML className="md:pr-4 pt-4 md:pt-0">{text}</HTML>
          </TextContainer>
        </If>
      </div>
      <div className="md:w-3/4">
        <If predicate={isRight && !!image}>
          <Img src={image} />
        </If>
        <If predicate={!isRight && !!text}>
          <TextContainer>
            <HTML className="md:pl-4 pt-4 md:pt-0">{text}</HTML>
          </TextContainer>
        </If>
      </div>
    </section>
  )
}
