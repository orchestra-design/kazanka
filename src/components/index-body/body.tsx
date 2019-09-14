import * as React from 'react'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'

import { Button } from '../button/index'
import { HTML } from '../html/index'
import { Img } from '../img/index'

import { Videos } from './videos'
import {
  imageStyles,
  imageSectionStyles,
  buttonWrapperStyles,
  TextContainer,
} from './styles'

export function Body({ body }) {
  if (!body) return null

  return (
    <div>
      {body.map(({ __typename, primary, items }) => {
        if (__typename === 'PrismicIndexBodyImage') {
          if (get(items, '0.imageimages.url')) return null
          if (get(primary, 'imageimage.url')) {
            return (
              <section key={uuid()} css={imageSectionStyles}>
                <div css={imageStyles}>
                  <Img src={primary.imageimage} />
                </div>
                {primary.name && (
                  <div css={buttonWrapperStyles}>
                    <Button inverted rounded={0.25}>
                      {primary.name}
                    </Button>
                  </div>
                )}
              </section>
            )
          }
        }
        if (__typename === 'PrismicIndexBodyVideos') {
          return <Videos key={uuid()} items={items} />
        }
        if (__typename === 'PrismicIndexBodyText') {
          if (!primary) return null
          if (primary.name === 'map') return null
          return (
            <section key={uuid()}>
              <TextContainer>
                <HTML>{get(primary, 'text.html')}</HTML>
              </TextContainer>
            </section>
          )
        }
      })}
    </div>
  )
}
