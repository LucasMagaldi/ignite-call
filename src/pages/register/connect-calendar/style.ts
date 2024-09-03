import { Box, styled, Text, Heading, Button } from '@ignite-ui/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 540,
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
  marginTop: '$6',
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
})

export const InputBox = styled('div', {
  display: 'flex',
  border: '1px solid $gray600',
  padding: '$3 $6',
  alignItems: 'center',
  justifyContent: 'space-between',
  [`${Button}`]: {
    [`${Text}`]: {
      color: '#00B37E',
    },
    '&:hover': {
      [`${Text}`]: {
        color: '#ffff',
      },
    },
  },
})
