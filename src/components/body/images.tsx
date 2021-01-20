import * as React from 'react'
import * as uuid from 'uuid/v1'
import { css } from '@emotion/core'

// import { HTML } from '../html/index'
import If from '../if/index'
import { Img } from '../img/index'
import { DescriptionContainer } from './styles'

export function Images({ items = [] }) {
  const [current, setCurrent] = React.useState<number>(0)

  const handlePrev = React.useCallback(() => {
    setCurrent((prev) => {
      const next = prev - 1
      return next < 0 ? items.length - 1 : next
    })
  }, [])
  const handleNext = React.useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length)
  }, [])

  if (items.length === 0 || !items[current]) return null

  return (
    <section className="w-full max-w-3xl mx-auto mb-12">
      {[items[current]].map(({ imgimage, imgcaption }) => {
        return (
          <div key={uuid()}>
            <div className="relative">
              <Img className="w-full" src={imgimage} />
              <If predicate={items.length > 1}>
                <div className="absolute inset-0 flex flex-row flex-no-wrap items-center justify-center text-xl text-white">
                  <div
                    className="flex items-center justify-start flex-1 h-full p-4 opacity-0 cursor-pointer hover:opacity-100"
                    css={css`
                      transition: opacity 200ms ease-in-out;
                      background: linear-gradient(
                        270deg,
                        rgba(0, 0, 0, 0) 75%,
                        rgba(0, 0, 0, 0.5) 100%
                      );
                    `}
                    onClick={handlePrev}
                  >
                    {'←'}
                  </div>
                  <div
                    className="flex items-center justify-end flex-1 h-full p-4 opacity-0 cursor-pointer hover:opacity-100"
                    css={css`
                      transition: opacity 200ms ease-in-out;
                      background: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0) 75%,
                        rgba(0, 0, 0, 0.5) 100%
                      );
                    `}
                    onClick={handleNext}
                  >
                    {'→'}
                  </div>
                </div>
              </If>
            </div>
            <If predicate={items.length > 1}>
              <div className="px-8 pt-2 text-xxs">
                {current + 1} / {items.length}
              </div>
            </If>
            <If predicate={!!imgcaption}>
              <DescriptionContainer className="px-8 pt-2">
                {imgcaption}
              </DescriptionContainer>
            </If>
          </div>
        )
      })}
    </section>
  )
}
