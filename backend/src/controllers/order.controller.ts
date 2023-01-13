import { Request, Response } from "express";
import { prismaClient } from "../database/prisma.client";
import { BadRequestError } from "../helpers/api-errors";
import { findCustomerId, productExist, setStock } from "../services/order.service";

interface Particulars {
    name: string
    description: string
    value: string
}
interface Product {
    id: string
    name: string
    price: string
    brand: string
    tax: string
    volumes: number
    image: string
    particulars: Particulars[]
}


const orderController = {
    async create(req: Request, res: Response) {
        const { customerId, productsList } = req.body;
        const customerExist = await findCustomerId(customerId)
        if (!customerExist) {
            throw new BadRequestError('cliente não existe')
        }

      
        const orderCreated = await prismaClient.order.create({
            data: {
                customerId: customerExist.id,
                productsList: productsList,
            }
        })
        if (!orderCreated) {
            throw new BadRequestError('Bad Request')
        }

        const stockProducts =  productsList.map(async (product:Product)=>{
            
           await setStock(product.id, product.volumes);
           
        })
        console.log(stockProducts)


        res.status(201).json(orderCreated)
    }
}
export { orderController }