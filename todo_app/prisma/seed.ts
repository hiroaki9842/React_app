import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newBlog = await prisma.blog.create({
    data: {
      title: 'テストタイトル',
      content: 'テスト内容',
      createdAt: new Date(),
      user: 'テストユーザー',
    },
  });

  console.log('New blog created:', newBlog);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
