// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, username } = req.body
  const user = await prisma.user.create({
    data: {
      name,
      username,
    },
  })
  res.status(201).json(user)
}
