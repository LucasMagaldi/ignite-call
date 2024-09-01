import { Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  //justifyContent: 'space-around',
  height: '100vh',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
})

export const Hero = styled('div', {
  maxWidth: 400,
  padding: '0 $10',

  [`${Heading}`]: {
    '@media(max-width600)': {
      fontSize: '$6x1',
    },
  },

  [`${Text}`]: {
    color: '$gray200',
  },
})

export const Preview = styled('div', {
  overflow: 'hidden',
  '@media(max-width: 600px)': {
    display: 'none',
  },
})
