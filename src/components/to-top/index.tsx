import * as React from 'react'
import { useIntersection } from 'react-use'
import { get } from 'lodash'

import If from '../if/index'

export default function ToTop({ refs }) {
  const el = useIntersection(refs, {
    threshold: 0,
  })

  const handleToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <If predicate={!get(el, 'isIntersecting')}>
      <div
        className="fixed bottom-0 right-0 z-50 h-8 w-8 flex items-center justify-center m-4 text-white border border-solid rounded-full cursor-pointer text-xxs border-theme-red bg-theme-red hover:text-theme-red hover:bg-transparent"
        onClick={handleToTop}
      >
        ↑
      </div>
    </If>
  )
}
