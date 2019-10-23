/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.insertBlock(
    <block>
      <text />
    </block>
  )
}

export const input = (
  <value>
    <block>
      <cursor />
    </block>
    <block>not empty</block>
  </value>
)

export const output = (
  <value>
    <block>
      <text />
    </block>
    <block>
      <cursor />
    </block>
    <block>not empty</block>
  </value>
)