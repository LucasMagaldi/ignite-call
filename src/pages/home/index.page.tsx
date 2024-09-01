import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import { Container, Hero, Preview } from './style'
import previewImage from '../../assets/calendar-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading>Agendamento descomplicado</Heading>
        <Text>
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
          <ClaimUsernameForm />
        </Text>
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          alt="Application Calendar"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
