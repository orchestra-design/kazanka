import * as React from 'react'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { useToggle, useClickAway } from 'react-use'

import If from '../if/index'

function Link({ children, className, href, ...props }: any) {
  return (
    <GatsbyLink
      className={`inline-block px-2 py-1 text-white border border-solid text-xxs border-theme-indigo bg-theme-indigo hover:text-theme-indigo hover:bg-transparent ${className}`}
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
  { href: '/princips', title: 'Принципы' },
  // { href: 'engagement', title: 'Вовлечение' },
  // { href: 'dialogs', title: 'Диалоги о реке' },
] as const

export function Header() {
  const { parks } = useStaticQuery(graphql`
    query HeaderQuery {
      parks: allPrismicPark(sort: {fields: data___orderid, order: ASC}) {
        nodes {
          data {
            title {
              text
            }
          }
          uid
        }
      }
    }
  `)

  const [opened, toggle] = useToggle(false)
  const ref = React.useRef(null)
  useClickAway(ref, () => {
    toggle(false)
  })

  return (
    <header className="absolute inset-0 bottom-auto z-50 p-4">
      <nav className="flex flex-row">
        <Link href="/" activeClassName="hidden">
          ← На главную страницу
        </Link>
        <ul className="flex flex-row flex-no-wrap ml-auto">
          <If predicate={parks.nodes.length > 0}>
            <li
              className="relative ml-4"
              onClick={toggle}
              onMouseEnter={() => toggle(true)}
            >
              <a
                href="/#map"
                className="inline-block px-2 py-1 text-white border border-solid text-xxs border-theme-indigo bg-theme-indigo hover:text-theme-indigo hover:bg-transparent"
              >
                Карта парков
              </a>
              <If predicate={opened}>
                <ul
                  ref={ref}
                  className="absolute left-0 flex flex-col md:left-auto md:right-0"
                  onMouseOver={() => toggle(true)}
                  onMouseLeave={() => toggle(false)}
                >
                  {parks.nodes.map(({ uid, data }) => (
                    <li key={uid} className="whitespace-no-wrap">
                      <Link
                        href={`/${uid}`}
                        className="w-full"
                        activeClassName="bg-theme-teal border-theme-teal"
                      >
                        {data.title.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </If>
            </li>
          </If>
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
