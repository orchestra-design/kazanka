import * as React from 'react'
import * as uuid from 'uuid/v1'
import { get, isArray, size } from 'lodash'
import { navigateTo } from 'gatsby-link'

import { HTML } from '../html/index'
import If from '../if/index'
import { Back } from '../index-body/back'
import { Title } from '../index-body/title'
import { smallDigitsStyles } from '../index-body/styles'
import { Images } from '../body/images'
import { ImageCaption } from '../body/image-caption'
import { TwoCols } from '../body/two-cols'
import { LinkToForm } from '../body/linktoform'
import { TextContainer } from '../body/styles'
import ToTop from '../to-top/index'

export function ParkBody({ data, parks }) {
  const title = get(data, 'title.text')
  const subTitle = get(data, 'subtitle.text')
  const info = get(data, 'info.html')
  const image = get(data, 'image')
  const [firstBlock, ...body] = get(data, 'body')
  const firstBlockText = get(firstBlock, 'primary.text.html')
  const firstBlockItems = get(firstBlock, 'items', [])
  const color = get(data, 'color') || 'yellow'

  const ref = React.useRef<HTMLDivElement>(null)

  const handleClick = React.useCallback(
    (num) => {
      const index =
        parks.findIndex(
          (p) => get(p, 'data.orderid') === get(data, 'orderid')
        ) + num
      const link = get(parks, [
        index < 0 ? parks.length - 1 : index > parks.length - 1 ? 0 : index,
        'uid',
      ])

      if (link) {
        navigateTo(`/${link}`)
      }
    },
    [parks]
  )

  const getTitle = React.useCallback(
    (num) => {
      const index =
        parks.findIndex(
          (p) => get(p, 'data.orderid') === get(data, 'orderid')
        ) + num
      return get(parks, [
        index < 0 ? parks.length - 1 : index > parks.length - 1 ? 0 : index,
        'data',
        'title',
        'text',
      ])
    },
    [parks]
  )

  return (
    <>
      <main className="min-h-screen">
        <If predicate={!!title}>
          <div
            ref={ref}
            className="relative flex flex-col items-center justify-center w-full min-h-screen-2/3 md:min-h-screen"
          >
            <Back image={image} color={color} />
            <div className={`mb-16${!!(subTitle && info) ? ' mt-auto' : ''}`}>
              <Title title={title} />
              <If predicate={!!subTitle}>
                <h2 className="relative mt-3 text-base text-center text-white">
                  {subTitle}
                </h2>
              </If>
            </div>
            <If predicate={!!info}>
              <div className="relative mt-auto mb-8 text-base text-center text-white md:mb-16">
                <HTML>{info}</HTML>
              </div>
            </If>
          </div>
        </If>
        <section
          className={`font-sans bg-theme-${color} w-full h-full px-8 pb-16 pt-8 mb-12`}
        >
          <If predicate={!!firstBlockText}>
            <HTML className="max-w-5xl mx-auto">{firstBlockText}</HTML>
          </If>
          <If predicate={firstBlockItems.length > 0}>
            <div
              className="flex items-center justify-center mt-12"
              key={uuid()}
            >
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
      <If predicate={true}>
        <div className="flex flex-row p-4">
          <div
            title={getTitle(-1)}
            className="h-8 w-8 flex items-center justify-center text-white border border-solid rounded-full cursor-pointer text-xxs border-theme-red bg-theme-red hover:text-theme-red hover:bg-transparent"
            onClick={() => handleClick(-1)}
          >
            ←
          </div>
          <div
            title={getTitle(1)}
            className="h-8 w-8 ml-4 flex items-center justify-center text-white border border-solid rounded-full cursor-pointer text-xxs border-theme-red bg-theme-red hover:text-theme-red hover:bg-transparent"
            onClick={() => handleClick(1)}
          >
            →
          </div>
        </div>
      </If>
      <ToTop refs={ref} />
    </>
  )
}
