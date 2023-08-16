import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import { NextSeo } from 'next-seo'

import Image from 'next/image'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <Container>
        <Hero>
          <Heading size={'4xl'}>Agendamento descomplicado</Heading>
          <Text size={'lg'}>
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>

          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendário simbolizando aplicação em funcionamento"
          />
        </Preview>
      </Container>
    </>
  )
}
