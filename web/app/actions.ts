'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"
import { auth } from "@/auth"

const ServiceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  imageUrl: z.string().optional().or(z.literal('')),
})

const ProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  category: z.string().optional().or(z.literal('')),
  imageUrl: z.string().optional().or(z.literal('')),
  videoUrl: z.string().optional().or(z.literal('')),
})

export async function createService(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session) {
    return { message: 'Unauthorized' };
  }

  const validatedFields = ServiceSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    imageUrl: formData.get('imageUrl'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Service.',
    }
  }

  try {
    await prisma.service.create({
      data: {
        title: validatedFields.data.title,
        description: validatedFields.data.description,
        imageUrl: validatedFields.data.imageUrl || null,
      },
    })
  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Service.',
    }
  }

  revalidatePath('/services')
  revalidatePath('/')
  redirect('/admin/services')
}

export async function createProject(prevState: any, formData: FormData) {
  const session = await auth();
  if (!session) {
    return { message: 'Unauthorized' };
  }

  const validatedFields = ProjectSchema.safeParse({
    title: formData.get('title'),
    description: formData.get('description'),
    category: formData.get('category'),
    imageUrl: formData.get('imageUrl'),
    videoUrl: formData.get('videoUrl'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Project.',
    }
  }

  try {
    await prisma.project.create({
      data: {
        title: validatedFields.data.title,
        description: validatedFields.data.description,
        category: validatedFields.data.category || null,
        imageUrl: validatedFields.data.imageUrl || null,
        videoUrl: validatedFields.data.videoUrl || null,
      },
    })
  } catch (error) {
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Project.',
    }
  }

  revalidatePath('/portfolio')
  redirect('/admin/portfolio')
}

export async function deleteService(id: string) {
  const session = await auth();
  if (!session) {
    throw new Error('Unauthorized');
  }

  try {
    await prisma.service.delete({
      where: { id },
    })
    revalidatePath('/services')
    revalidatePath('/admin/services')
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Service.' }
  }
}

export async function deleteProject(id: string) {
  const session = await auth();
  if (!session) {
    throw new Error('Unauthorized');
  }

  try {
    await prisma.project.delete({
      where: { id },
    })
    revalidatePath('/portfolio')
    revalidatePath('/admin/portfolio')
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Project.' }
  }
}
