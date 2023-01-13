import { prismaClient } from "../database/prisma.client";
import productModel from "../models/product.model";
interface Product {
    id: string
    name: string
    price: string
    brand: string
    tax: string
    volumes: number
    image: string
}

const findCustomerId = async (id: string) => await prismaClient.customer.findUnique({
    where: {
        id
    }
})

const productExist = async (id: string) => await productModel.findById(id)


const setStock = async (id: string, volumes: number) =>  {
 
    await productExist(id).then(async(selectedProduct)=>{

      return await productModel.updateOne({id:id},{$set:{stock: 10 }})
    }).catch((err)=>{
        console.log(err)
    }) 
}


export { findCustomerId, productExist,setStock }