import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { Container, Form, FormError, Header } from './style'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const RegisterSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The user needs at least 3 letters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, { message: 'The name needs at least 3 letters' }),
})

type RegisterFormData = z.infer<typeof RegisterSchema>

export default function Register() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  })

  async function handleRegisterSubmit(data: any) {
    console.log(data)
  }

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query.username, setValue])

  return (
    <Container as="form" onSubmit={handleSubmit(handleRegisterSubmit)}>
      <Header>
        <Heading as="strong">Wellcome to Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form>
        <label>
          <Text>User name</Text>
          <TextInput
            prefix="igite.com/"
            placeholder="user name"
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...register('username')}
          />
          {errors.username ? (
            <FormError>{errors.username.message}</FormError>
          ) : (
            ''
          )}
        </label>
        <label>
          <Text>Full name</Text>
          <TextInput
            placeholder="full name"
            crossOrigin={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            {...register('name')}
          />
          {errors.name ? <FormError>{errors.name.message}</FormError> : ''}
        </label>

        <Button>
          <Text>Next step</Text>
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
