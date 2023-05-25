import { PrismaClient } from "@prisma/client"



export default async function handler(req, res) {
    const prisma = new PrismaClient()
    const { nombre, pedido, fecha, total } = req.body

    // Obtener Ordenes 
    const ordenes = await prisma.orden.findMany({
        where: {
            estado: false
        }
    })
    res.status(200).json(ordenes)


    // Crear Ordenes
    if (req.method === "POST") {
        const orden = await prisma.orden.create({
            data: {
                nombre: nombre,
                total: total,
                pedido: pedido,
                fecha: fecha
            }
        })
        res.status(200).json(orden)
    }
}