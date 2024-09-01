import { Box, Button, styled } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  padding: '$4',
  button: {
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
