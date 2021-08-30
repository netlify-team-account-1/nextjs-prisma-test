import * as prismaAll from '@prisma/client'
/**
 * https://github.com/prisma/studio/issues/614
 *
 */
// @ts-expect-error ts(2339)
BigInt.prototype.toJSON = function toJSON() {
  return Number(this)
}

export const prisma =
  global.prisma ??
  new prismaAll.PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV === 'development') {
  global.prisma = prisma
}
