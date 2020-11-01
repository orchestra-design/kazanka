import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { css } from '@emotion/core'

function Link({ children, href, ...props }) {
  return (
    <GatsbyLink
      className="inline-block px-2 py-1 text-white border border-solid text-xxs border-theme-indigo bg-theme-indigo hover:text-theme-indigo hover:bg-transparent"
      css={css`
        transition: all 200ms ease-in-out;
      `}
      to={`/${href}`}
      {...props}
    >
      {children}
    </GatsbyLink>
  )
}

const LINKS = [
  { href: 'princips', title: 'Принципы' },
  { href: 'manzara', title: 'Парк Манзара' },
  // { href: 'engagement', title: 'Вовлечение' },
  // { href: 'parks', title: 'Парки' },
] as const

export function Header() {
  return (
    <header className="absolute inset-0 bottom-auto z-10 p-4">
      <nav className="flex flex-row">
        <Link href="/" activeClassName="hidden">
          ← На главную страницу
        </Link>
        <ul className="flex flex-row flex-no-wrap ml-auto">
          {LINKS.map(({ title, href }) => (
            <li key={href} className="ml-4">
              <Link href={href} activeClassName="hidden">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
