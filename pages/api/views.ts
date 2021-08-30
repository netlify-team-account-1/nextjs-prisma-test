import type {NextApiRequest, NextApiResponse} from 'next'
import {prisma} from '../../PrismaClient'

export default async function handler(
  _: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const allViews = await prisma.views.aggregate({
      _sum: {
        count: true,
      },
    })

    const total = allViews._sum.count

    return response.status(200).json({total})
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e)
      return response.status(500).json({message: e.message})
    }
    return response.status(500).json({message: 'An error has occured.'})
  }
}
