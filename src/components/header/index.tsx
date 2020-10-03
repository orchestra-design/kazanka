import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'

function Link({ children, href }) {
  return (
    <GatsbyLink
      className="inline-block px-2 py-1 text-xxs border-solid border border-theme-indigo bg-theme-indigo text-white hover:text-theme-indigo hover:bg-transparent"
      css={css`
        transition: all 200ms ease-in-out;
      `}
      to={`/${href}`}
    >
      {children}
    </GatsbyLink>
  )
}

const LINKS = [
  { href: 'engagement', title: 'Вовлечение' },
  { href: 'princips', title: 'Принципы' },
  { href: 'parks', title: 'Парки' },
] as const

export function Header() {
  return (
    <header className="absolute inset-0 bottom-auto p-4 z-10">
      <nav className="flex flex-row">
        <Link href="/">Kazanka</Link>
        <ul className="flex flex-row flex-no-wrap ml-auto">
          {LINKS.map(({ title, href }) => (
            <li className="ml-4">
              <Link key={href} href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
