/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.splitNodes({ height: 'inline' })
}

export const input = (
  <value>
    <block>
      <text />
      <inline>
        word<cursor />
      </inline>
      <text />
    </block>
  </value>
)

export const output = (
  <value>
    <block>
      <text />
      <inline>word</inline>
      <text />
      <inline>
        <cursor />
      </inline>
      <text />
    </block>
  </value>
)