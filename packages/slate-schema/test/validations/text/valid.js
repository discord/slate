/** @jsx jsx */

import { jsx } from 'slate-hyperscript'

export const schema = [
  {
    for: 'node',
    match: { a: true },
    validate: {
      text: v => v === 'valid',
    },
  },
]

export const input = (
  <value>
    <element a>valid</element>
  </value>
)

export const output = input