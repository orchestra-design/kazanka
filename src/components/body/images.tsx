import * as React from 'react'
import * as uuid from 'uuid/v1'
// import { css } from '@emotion/core'

import { HTML } from '../html/index'
import If from '../if/index'
import { Img } from '../img/index'
import { DescriptionContainer } from './styles'

export function Images({ items = [] }) {
  const [current, setCurrent] = React.useState<number>(0)

  const handleClick = React.useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length)
  }, [])

  if (items.length === 0) return null

  return (
    <section className="w-full max-w-3xl mx-auto mb-12 md:px-8">
      {[items[current]].map(({ imgimage, imgcaption }) => {
        return (
          <div key={uuid()} onClick={handleClick} className="cursor-pointer">
            <Img className="w-full" src={imgimage} />
            <If predicate={items.length > 1}>
              <div className="pt-2 text-xxs px-8">
                {current + 1} / {items.length}
              </div>
            </If>
            <If predicate={!!imgcaption}>
              <DescriptionContainer className="pt-2 px-8">
                {imgcaption}
              </DescriptionContainer>
            </If>
          </div>
        )
      })}
    </section>
  )
}
