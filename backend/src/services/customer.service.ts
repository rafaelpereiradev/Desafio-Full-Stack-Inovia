import { Request, Response } from "express";
import { UserControler } from "../controllers/user.controller";
import { prismaClient } from "../database/prisma.client";

interface IUser{
    id:string,
    username:string,
    password:string

}

const findByEmail = async (email: string) => await prismaClient.customer.findUnique({
    where: {
        email
    }
})
const findByUsername = async(username:string) => await prismaClient.user.findUnique({
    where:{
        username
    }
})
const userController = new UserControler
const createCustomerUser = async (username:string,password:string):Promise<any> => await userController.createCustomerUser(username,password)


export { findByEmail,findByUsername,createCustomerUser }