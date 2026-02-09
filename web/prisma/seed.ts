import "dotenv/config";
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10)

  // Ensure email is unique
  const existingAdmin = await prisma.user.findUnique({
    where: { email: 'admin@example.com' }
  })

  if (!existingAdmin) {
    const admin = await prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: hashedPassword,
      },
    })
    console.log('Created admin user:', admin)
  } else {
    console.log('Admin user already exists')
  }

  const services = [
    { title: 'Demolition', description: 'Safe and efficient demolition services for residential and commercial properties.' },
    { title: 'Plaster', description: 'High-quality plastering for smooth and durable finishes.' },
    { title: 'Plumbing', description: 'Complete plumbing solutions including installation, repair, and maintenance.' },
    { title: 'Civil Construction', description: 'Comprehensive civil engineering and construction services.' },
  ]

  // Check if services exist
  const count = await prisma.service.count()
  if (count === 0) {
    for (const service of services) {
      await prisma.service.create({
        data: service,
      })
    }
    console.log('Created initial services')
  }

  // Add a sample project
  const projectCount = await prisma.project.count()
  if (projectCount === 0) {
    await prisma.project.create({
      data: {
        title: 'Residential Complex Demolition',
        description: 'Demolition of old structure to make way for new development.',
        category: 'Demolition',
        // imageUrl: '/sample-project.jpg', // Placeholder
      }
    })
    console.log('Created sample project')
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
