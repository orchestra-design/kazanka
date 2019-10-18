import * as React from 'react'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'
import { useToggle } from 'react-use'

import { HTML } from '../html/index'
import { Img } from '../img/index'

import { BodyButton } from './button'
import { Footer } from './footer'
import { Images } from './images'
import { Map } from './map'
import { Videos } from './videos'
import {
  imageStyles,
  imgStyles,
  imageSectionStyles,
  buttonWrapperStyles,
  buttonStyles,
  TextContainer,
} from './styles'

export function Body({ body }) {
  if (!body) return null

  const [popupOpened, togglePopup] = useToggle(false)

  return (
    <React.Fragment>
      {body.map(({ __typename, primary, items }) => {
        if (__typename === 'PrismicIndexBodyImage') {
          if (get(items, '0.imageimages.url')) {
            return <Images key={uuid()} items={items} />
          }
          if (get(primary, 'imageimage.url')) {
            return (
              <section key={uuid()} css={imageSectionStyles}>
                <div css={imageStyles}>
                  <Img css={imgStyles} src={primary.imageimage} />
                </div>
                {primary.name && (
                  <div css={buttonWrapperStyles}>
                    <BodyButton
                      styles={buttonStyles}
                      onClick={() => togglePopup(true)}
                    />
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
          if (primary.name === 'map') {
            return (
              <Map
                key={uuid()}
                text={get(primary, 'text.html')}
                togglePopup={togglePopup}
                opened={popupOpened}
              />
            )
          }
          if (primary.name === 'links') {
            return (
              <Footer
                key={uuid()}
                text={get(primary, 'text.html')}
                items={items}
              />
            )
          }
          return (
            <section key={uuid()}>
              <TextContainer>
                <HTML>{get(primary, 'text.html')}</HTML>
              </TextContainer>
            </section>
          )
        }
      })}
    </React.Fragment>
  )
}
