import dynamic from 'next/dynamic'

const NoSSRForm = dynamic(() => import('../UsernameForm/index'), {
  ssr: false,
})

export function ClaimUsernameForm() {
  return <NoSSRForm />
}
