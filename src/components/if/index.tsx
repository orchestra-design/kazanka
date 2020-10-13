import * as React from 'react'

type Props = {
  predicate: boolean
  children: React.ReactNode
}

export default function If({ predicate, children }: Props) {
  return predicate ? <React.Fragment>{children}</React.Fragment> : null
}
