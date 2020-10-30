import * as React from 'react'
import * as uuid from 'uuid/v1'
import { get, isArray, size } from 'lodash'
import { css } from '@emotion/core'

import { HTML } from '../html/index'
import If from '../if/index'
import * as back from '../index-body/back.svg'
import { Back } from '../index-body/back'
import { Title } from '../index-body/title'
import { jumboStyles } from '../index-body/styles'
import { Images } from '../body/images'
import { ImageCaption } from '../body/image-caption'
import { TwoCols } from '../body/two-cols'
import { LinkToForm } from '../body/linktoform'
import { TextContainer } from '../body/styles'

export function ParkBody({ data }) {
  const title = get(data, 'title.text')
  const image = get(data, 'image')
  const [firstBlock, ...body] = get(data, 'body')
  const firstBlockText = get(firstBlock, 'primary.text.html')

  return (
    <main className="min-h-screen">
      <If predicate={!!title}>
        <div css={jumboStyles}>
          <Back image={image} color="#F6936B" />
          <div className="mb-16">
            <Title title={title} />
          </div>
        </div>
      </If>
      <section
        className={`
          font-sans
          bg-contain bg-no-repeat
          bg-theme-orange
          w-full h-full
          px-8 pb-16 pt-8
          mb-12
        `}
      >
        <div className="max-w-3xl mx-auto">
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
