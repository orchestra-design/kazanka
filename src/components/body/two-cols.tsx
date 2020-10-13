import * as React from 'react'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'

import { HTML } from '../html/index'
import If from '../if/index'

import { DescriptionContainer } from './styles'

export function TwoCols({ items = [], label }) {
  if (items.length === 0) return null

  return (
    <div className="mb-10">
      {items.map((item, idx) => {
        const isEven = idx % 2 === 0
        const leftText = get(item, 'leftcol.html')
        const rightText = get(item, 'righttext.html')
        const isRight = label === 'rightcol'

        return (
          <section
            key={uuid()}
            className={`w-full max-w-xl mx-auto flex flex-col md:flex-row flex-no-wrap ${
              isEven && 'bg-gray-200'
            }`}
          >
            <div className="md:w-1/3">
              <If predicate={!isRight && !!leftText}>
                <DescriptionContainer>
                  <HTML className="p-4">{leftText}</HTML>
                </DescriptionContainer>
              </If>
              <If predicate={isRight && !!rightText}>
                <DescriptionContainer>
                  <HTML className="p-4">{rightText}</HTML>
                </DescriptionContainer>
              </If>
            </div>
            <div className="md:w-2/3">
              <If predicate={isRight && !!leftText}>
                <DescriptionContainer>
                  <HTML className="p-4">{leftText}</HTML>
                </DescriptionContainer>
              </If>
              <If predicate={!isRight && !!rightText}>
                <DescriptionContainer>
                  <HTML className="p-4">{rightText}</HTML>
                </DescriptionContainer>
              </If>
            </div>
          </section>
        )
      })}
    </div>
  )
}
