import * as React from 'react'
import * as uuid from 'uuid/v1'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { HTML } from '../html/index'

export function FaqContent({ faq }) {
  const [active, setActive] = React.useState(null)

  return (
    <React.Fragment>
      {faq.map((item, idx) => {
        return (
          <React.Fragment key={uuid()}>
            <h4
              css={css`
                ${tw`
                  font-semibold
                  cursor-pointer
                  pb-4
                  pt-6
                  text-lg
                  text-theme-indigo
                  hover:text-theme-red
                `};
                border-bottom: ${active === idx ? 'none' : '1px solid #29B2C0'};
                transition: color 200ms ease-in-out;
              `}
              onClick={() => setActive(active === idx ? null : idx)}
            >
              {item.question.text}
              {' '}
              <span>{active === idx ? '△' : '▽'}</span>
            </h4>
            <HTML
              css={css`
                ${tw`
                  hidden
                  pl-4
                `};
                ${active === idx && tw`block pb-4`};
                border-bottom: ${active === idx && '1px solid #29B2C0'};
              `}
            >
              {item.answer.html}
            </HTML>
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}
