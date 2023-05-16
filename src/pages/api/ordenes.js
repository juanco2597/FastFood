import { PrismaClient } from "@prisma/client"



export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const { nombre, pedido, fecha, total } = req.body

    if (req.method === "POST") {
        const orden = await prisma.orden.create({
            data: {
                nombre,
                total,
                pedido,
                fecha
            }
        })

        console.log(orden, 'Orden')
        res.json(orden)
    }
}