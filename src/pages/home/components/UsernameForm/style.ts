import { Box, Button, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  padding: '$4',
  [`${Button}`]: {
    display: 'flex',
    alignItems: 'center',
    background: '#00875F',
    border: 'none',
    color: '#ffff',
    borderRadius: '10px',
    padding: 12,
    cursor: 'pointer',
  },
})

export const FormAnnotations = styled('div', {
  marginTop: '$2',
  color: '$gray200',
})
