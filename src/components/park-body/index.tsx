import * as React from 'react'
import * as uuid from 'uuid/v1'
import { get, isArray, size } from 'lodash'

import { HTML } from '../html/index'
import If from '../if/index'
import { Back } from '../index-body/back'
import { Title } from '../index-body/title'
import { smallDigitsStyles, jumboStyles } from '../index-body/styles'
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
  const firstBlockItems = get(firstBlock, 'items')
  const color = get(data, 'color', 'yellow')

  return (
    <main className="min-h-screen">
      <If predicate={!!title}>
        <div css={jumboStyles}>
          <Back image={image} color={color} />
          <div className="mb-16">
            <Title title={title} />
          </div>
        </div>
      </If>
      <section
        className={`font-sans bg-theme-${color} w-full h-full px-8 pb-16 pt-8 mb-12`}
      >
        <If predicate={!!firstBlockText}>
          <HTML className="max-w-5xl mx-auto">{firstBlockText}</HTML>
        </If>
        <If predicate={firstBlockItems && firstBlockItems.length !== 0}>
          <div className="flex items-center justify-center mt-12" key={uuid()}>
            <div css={smallDigitsStyles}>
              {firstBlockItems.map(({ richtext }) => (
                <TextContainer key={uuid()}>
                  <HTML>{get(richtext, 'html')}</HTML>
                </TextContainer>
              ))}
            </div>
          </div>
        </If>
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
