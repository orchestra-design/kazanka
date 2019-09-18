import * as React from 'react'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'
import { useToggle } from 'react-use'

import { Button } from '../button/index'
import { HTML } from '../html/index'
import { Img } from '../img/index'

import { Footer } from './footer'
import { Images } from './images'
import { Map } from './map'
import { Videos } from './videos'
import {
  imageStyles,
  imageSectionStyles,
  buttonWrapperStyles,
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
                  <Img src={primary.imageimage} />
                </div>
                {primary.name && (
                  <div css={buttonWrapperStyles}>
                    <Button
                      inverted
                      rounded={0.25}
                      onClick={() => togglePopup(true)}
                    >
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
