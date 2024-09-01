import { Box, Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 540,
  padding: '24px',
  margin: '$20 auto $4',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  [`${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },

  [`${Heading}`]: {
    lineHeight: '$base',
  },
})

export const Form = styled(Box, {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$6',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})
