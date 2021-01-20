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
  // { href: 'parks', title: 'Парки' },
] as const

export function Header() {
  const { parks } = useStaticQuery(graphql`
    query HeaderQuery {
      parks: allPrismicPark {
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
    <header className="absolute inset-0 bottom-auto z-10 p-4">
      <nav className="flex flex-row">
        <Link href="/" activeClassName="hidden">
          ← На главную страницу
        </Link>
        <ul className="flex flex-row flex-no-wrap ml-auto">
          <Link href="/#map" activeClassName="hidden">
            Карта парков
          </Link>
          {LINKS.map(({ title, href }) => (
            <li key={href} className="ml-4">
              <Link href={href} activeClassName="hidden">
                {title}
              </Link>
            </li>
          ))}
          <If predicate={parks.nodes.length > 0}>
            <li className="relative ml-4">
              <button
                role="button"
                onClick={toggle}
                className="inline-block px-2 py-1 text-white border border-solid text-xxs border-theme-indigo bg-theme-indigo hover:text-theme-indigo hover:bg-transparent"
              >
                Диалоги о реке
              </button>
              <If predicate={opened}>
                <ul ref={ref} className="absolute right-0 flex flex-col">
                  {parks.nodes.map(({ uid, data }) => (
                    <li key={uid} className="">
                      <Link href={`/${uid}`} className="w-full" activeClassName="bg-theme-teal border-theme-teal">
                        {data.title.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </If>
            </li>
          </If>
        </ul>
      </nav>
    </header>
  )
}
