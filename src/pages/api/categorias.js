import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {

  const categorias = await prisma.categoria.findMany({
    include: {
      Productos: true
    }
  })
  res.status(200).json(categorias)
}
