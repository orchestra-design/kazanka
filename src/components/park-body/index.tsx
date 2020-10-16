import * as React from 'react'
import * as uuid from 'uuid/v1'
import { get, isArray, size } from 'lodash'
import { css } from '@emotion/core'

import { HTML } from '../html/index'
import If from '../if/index'
import * as back from '../index-body/back.svg'
import { Images } from '../body/images'
import { ImageCaption } from '../body/image-caption'
import { TwoCols } from '../body/two-cols'
import { LinkToForm } from '../body/linktoform'
import { TextContainer } from '../body/styles'

export function ParkBody({ data }) {
  const title = get(data, 'title.text')
  const [firstBlock, ...body] = get(data, 'body')
  const firstBlockText = get(firstBlock, 'primary.text.html')

  return (
    <main className="min-h-screen">
      <section
        className={`
          font-sans
          bg-contain bg-no-repeat
          bg-theme-yellow
          w-full h-full      
          px-8 py-16
          mb-12
        `}
        css={css`
          @media (min-width: 768px) {
            background-image: url(${back});
          }
        `}
      >
        <div className="max-w-3xl mx-auto">
          <If predicate={!!title}>
            <h1 className="font-semibold text-4xl md:text-5xl">{title}</h1>
          </If>
          <If predicate={!!firstBlockText}>
            <HTML>{firstBlockText}</HTML>
          </If>
        </div>
      </section>
      <section>
        <If predicate={isArray(body) && size(body) > 0}>
          {body.map(({ __typename, primary, items, slice_label }) => (
            <React.Fragment key={uuid()}>
              <If predicate={__typename === 'PrismicParkBodyImage'}>
                <Images items={items} />
              </If>
              <If predicate={__typename === 'PrismicParkBodyImageCaption'}>
                <ImageCaption primary={primary} label={slice_label} />
              </If>
              <If predicate={__typename === 'PrismicParkBodyTwoColumnText'}>
                <TwoCols items={items} label={slice_label} />
              </If>
              <If predicate={__typename === 'PrismicParkBodyText'}>
                <TextContainer className="max-w-3xl mx-auto">
                  <HTML>{get(primary, 'text.html')}</HTML>
                </TextContainer>
              </If>
              <If predicate={__typename === 'PrismicParkBodyLink'}>
                <LinkToForm primary={primary} />
              </If>
            </React.Fragment>
          ))}
        </If>
      </section>
    </main>
  )
}
