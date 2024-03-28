import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, user } = req.body;
    
    try {
      const result = await prisma.blog.create({
        data: {
          title,
          content,
          user
        }
      });
      
      res.status(201).json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
