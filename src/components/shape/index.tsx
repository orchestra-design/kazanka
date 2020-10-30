import * as React from 'react'

export function Shape({ color = '#fff' }) {
  return (
    <svg viewBox="0 0 1920 275" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M960.5 168.97C1619.66 168.97 1920 0 1920 0V275H0V0.000371575C0 0.000371575 301.343 168.97 960.5 168.97Z"
        fill={ color }
      />
    </svg>
  )
}
