import * as React from 'react'
import * as uuid from 'uuid/v1'
import { get, isArray, size } from 'lodash'
import { css } from '@emotion/core'

import { HTML } from '../html/index'
import If from '../if/index'
import { ImageCaption } from '../body/image-caption'
import { TextContainer } from '../body/styles'
import { ImagePopup } from './image-popup'

export function PrincipsBody({ data }) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [opened, setOpened] = React.useState<number>(0)
  const [linked, setLinked] = React.useState<boolean>(false)

  const title = get(data, 'title.text')
  const [firstBlock, ...body] = get(data, 'body')
  const firstBlockText = get(firstBlock, 'primary.text.html')

  const opener = (e) => {
    const idx = get(e.target, 'dataset.idx', '')
    setOpened(parseInt(idx) + 1)
  }

  React.useEffect(() => {
    if (ref.current) {
      const links = ref.current.querySelectorAll('.link')
      for (let link of links) {
        link.addEventListener('click', opener)
      }
      setLinked(true)
    }
  }, [ref.current, linked, opener])

  React.useEffect(() => {
    return () => {
      if (ref.current) {
        const links = ref.current.querySelectorAll('.link')
        for (let link of links) {
          link.removeEventListener('click', opener)
        }
      }
    }
  }, [])

  return (
    <main className="min-h-screen">
      <section
        className={`
          font-sans
          bg-contain bg-no-repeat
          bg-theme-teal
          w-full h-full
          px-8 py-16
          mb-12
        `}
      >
        <div className="max-w-3xl mx-auto">
          <If predicate={!!title}>
            <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
          </If>
          <If predicate={!!firstBlockText}>
            <HTML>{firstBlockText}</HTML>
          </If>
        </div>
      </section>
      <section
        ref={ref}
        css={css`
          & .link {
            cursor: pointer;
            font-weight: 700;
          }
        `}
      >
        <If predicate={isArray(body) && size(body) > 0}>
          {body.map(({ __typename, primary, items, slice_label }, idx) => (
            <React.Fragment key={uuid()}>
              <If predicate={__typename === 'PrismicPrincipsBodyImageCaption'}>
                <ImageCaption
                  primary={{
                    ...primary,
                    iwctext: {
                      html: get(primary, 'iwctext.html', '').replace(
                        /(.*)<a.+>(.+)<\/a>(.*)/g,
                        `$1<span class="link" data-idx="${idx}">$2</span>$3`
                      ),
                    },
                  }}
                  label={slice_label}
                />
              </If>
              <If predicate={__typename === 'PrismicPrincipsBodyText'}>
                <TextContainer className="max-w-3xl mx-auto">
                  <HTML>{get(primary, 'text.html')}</HTML>
                </TextContainer>
              </If>
            </React.Fragment>
          ))}
        </If>
      </section>
      {body.map(({ __typename, items }, idx) => (
        <React.Fragment key={uuid()}>
          <If predicate={__typename === 'PrismicPrincipsBodyImage'}>
            <ImagePopup
              items={items}
              opened={opened === idx}
              togglePopup={setOpened}
            />
          </If>
        </React.Fragment>
      ))}
    </main>
  )
}
