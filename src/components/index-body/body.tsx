import * as React from 'react'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'
import { useToggle } from 'react-use'

import { Button } from '../button/index'
import { HTML } from '../html/index'
import { Img } from '../img/index'

import { BodyButton } from './button'
import { Faq } from './faq'
import { Images } from './images'
// import { Map } from './map'
import { Video } from './video'
import {
  imageStyles,
  imgStyles,
  imageSectionStyles,
  buttonWrapperStyles,
  buttonStyles,
  TextContainer,
  faqStyles,
  copyStyles,
  digitsStyles,
} from './styles'
import { Map } from './map'

export function Body({ body, faq, layers, highlights }) {
  if (!body) return null

  // const [popupOpened, togglePopup] = useToggle(false)
  const [faqOpened, toggleFaq] = useToggle(false)

  return (
    <React.Fragment>
      {body.map(({ __typename, primary, items }) => {
        if (__typename === 'PrismicIndexBodyImage') {
          if (get(items, '0.imageimages.url')) {
            return (
              <React.Fragment key={uuid()}>
                <Images items={items} />
                <Button
                  color="#0D134A"
                  inverted
                  rounded={0.25}
                  size={1.75}
                  styles={faqStyles}
                  onClick={() => toggleFaq(true)}
                >
                  F.A.Q.
                </Button>
                <Faq faq={faq} opened={faqOpened} toggle={toggleFaq} />
              </React.Fragment>
            )
          }
          if (get(primary, 'imageimage.url')) {
            return (
              <section key={uuid()} css={imageSectionStyles}>
                <div css={imageStyles}>
                  <Img css={imgStyles} src={primary.imageimage} />
                </div>
                {primary.name && (
                  <a
                    css={buttonWrapperStyles}
                    href="https://kazanka_river.mysocialpinpoint.com/kanzaka/map"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <BodyButton styles={buttonStyles} onClick={() => {}} />
                  </a>
                )}
              </section>
            )
          }
        }
        if (__typename === 'PrismicIndexBodyVideos') {
          return (
            <Video
              key={uuid()}
              items={items}
              title={get(primary, 'videotitle.text')}
            />
          )
        }
        if (__typename === 'PrismicIndexBodyText') {
          if (!primary) return null
          if (primary.name === 'map') {
            return (
              <section
                key="map"
                id="map"
                className="w-full max-w-5xl pt-12 mx-auto md:px-8"
              >
                <Map layers={layers} highlights={highlights} />
              </section>
            )
          }
          if (primary.name === 'links') {
            return null
          }
          if (primary.name === 'copy') {
            return null
          }
          if (primary.name === 'digits' && items && items.length) {
            return (
              <div
                className="flex items-center justify-center mt-12 bg-theme-yellow"
                key={uuid()}
              >
                <div css={digitsStyles}>
                  {items.map(({ richtext }) => (
                    <TextContainer key={uuid()}>
                      <HTML>{get(richtext, 'html')}</HTML>
                    </TextContainer>
                  ))}
                </div>
              </div>
            )
          }
          return (
            <section key={uuid()} className="mt-10">
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
