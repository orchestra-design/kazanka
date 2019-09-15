import * as React from 'react'
import * as uuid from 'uuid/v1'

import { Img } from '../img/index'
import { Row, Col } from '../row/index'

import { imagesStyles, rowStyles, imageSectionStyles } from './styles'

export function Images({ items }) {
  if (!items) return null
  return (
    <section css={imagesStyles}>
      <Row css={rowStyles}>
        {items.map(({ imageimages }) => (
          <Col key={uuid()} cols={3}>
            <Img css={imageSectionStyles} src={imageimages} />
          </Col>
        ))}
      </Row>
    </section>
  )
}
