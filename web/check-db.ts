import "dotenv/config";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('DATABASE_URL:', process.env.DATABASE_URL)
  try {
    const services = await prisma.service.findMany()
    console.log('Services:', services)
  } catch (e) {
    console.error(e)
  }
}

main()
  .finally(() => prisma.$disconnect())
