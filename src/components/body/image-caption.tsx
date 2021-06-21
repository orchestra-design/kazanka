import * as React from 'react'
import { get } from 'lodash'
// import { css } from '@emotion/core'

import { HTML } from '../html/index'
import If from '../if/index'
import { Img } from '../img/index'

import { DescriptionContainer } from './styles'

export function ImageCaption({ primary, label }) {
  if (!primary) return null

  const image = get(primary, 'iwcimage')
  const text = get(primary, 'iwctext.html')
  const isRight = label === 'imageright'

  return (
    <section className="flex flex-col flex-no-wrap w-full max-w-3xl px-8 mx-auto mb-12 md:flex-row">
      <div className="md:w-1/4">
        <If predicate={!isRight && !!image}>
          <Img src={image} />
        </If>
        <If predicate={isRight && !!text}>
          <DescriptionContainer>
            <HTML className="pt-4 md:pr-4 md:pt-0">{text}</HTML>
          </DescriptionContainer>
        </If>
      </div>
      <div className="md:w-3/4">
        <If predicate={isRight && !!image}>
          <Img src={image} />
        </If>
        <If predicate={!isRight && !!text}>
          <DescriptionContainer>
            <HTML className="pt-4 md:pl-4 md:pt-0">{text}</HTML>
          </DescriptionContainer>
        </If>
      </div>
    </section>
  )
}
