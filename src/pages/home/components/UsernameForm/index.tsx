import { TextInput, Text, Button } from '@ignite-ui/react'
import { Form, FormAnnotations } from './style'
import { ArrowRight } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/router'

const UsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'The user needs at least 3 letters' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    }),
})

type UsernameFormData = z.infer<typeof UsernameFormSchema>

export default function UsernameForm() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UsernameFormData>({
    resolver: zodResolver(UsernameFormSchema),
  })

  async function handleUsernameFormSubmit(data: UsernameFormData) {
    const { username } = data
    router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleUsernameFormSubmit)}>
        <TextInput
          prefix="ignite.com/"
          placeholder="your user"
          size="sm"
          color=""
          crossOrigin={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          {...register('username')}
        />
        <Button type="submit" disabled={isSubmitting}>
          Book
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotations>
        {errors.username ? <Text>{errors.username.message}</Text> : ''}
      </FormAnnotations>
    </>
  )
}
