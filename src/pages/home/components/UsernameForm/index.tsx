import { TextInput, Text } from '@ignite-ui/react'
import { Form, FormAnnotations } from './style'
import { ArrowRight } from 'phosphor-react'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsernameFormData>({
    resolver: zodResolver(UsernameFormSchema),
  })

  async function handleUsernameFormSubmit(data: UsernameFormData) {
    console.log(data)
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
        <button type="submit">
          Book
          <ArrowRight />
        </button>
      </Form>
      <FormAnnotations>
        {errors.username ? <Text>{errors.username.message}</Text> : ''}
      </FormAnnotations>
    </>
  )
}
