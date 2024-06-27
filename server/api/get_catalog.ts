import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  //const { chapterSlug, lessonSlug } = event.context.params;

  return prisma.catalog.findMany();
});