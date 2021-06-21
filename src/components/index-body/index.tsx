import * as React from 'react'
import { get } from 'lodash'

import { HTML } from '../html/index'

import { BodyTag } from './tag'
import { Back } from './back'
import { Body } from './body'
import { Title } from './title'
import { mainStyles, sectionStyles, TextContainer } from './styles'
import ToTop from '../to-top/index'

export function IndexBody({ data }) {
  const image = get(data, 'image')
  // const video = get(data, 'video')
  const faq = get(data, 'faq')
  const layers = get(data, 'layers')
  const highlights = get(data, 'highlights')
  const body = get(data, 'body')
  const tag = get(data, 'tag', '')
  const title = get(data, 'title.text', '')
  const subtitle = get(data, 'subtitle.text', '')
  const description = get(data, 'description.html')

  const ref = React.useRef<HTMLDivElement>(null)

  return (
    <>
      <main css={mainStyles}>
        <div
          ref={ref}
          className="relative flex flex-col items-center justify-center w-full min-h-screen-2/3 md:min-h-screen"
        >
          <Back image={image} />
          <div>
            <Title title={title} />
            <div className="relative mt-6 mb-20 text-xl text-center text-white">
              <HTML>{subtitle}</HTML>
            </div>
          </div>
          <BodyTag tag={tag} textColor="#FFF" />
        </div>
        <div css={sectionStyles}>
          <TextContainer>
            <HTML>{description}</HTML>
          </TextContainer>
          {/* <BodyTag tag={tag} textColor="#0D134A" /> */}
        </div>
        <Body body={body} faq={faq} layers={layers} highlights={highlights} />
      </main>
      <ToTop refs={ref} />
    </>
  )
}
