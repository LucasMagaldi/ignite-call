import { globalCss } from '@ignite-ui/react'

export const globalStyle = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
  },
})
