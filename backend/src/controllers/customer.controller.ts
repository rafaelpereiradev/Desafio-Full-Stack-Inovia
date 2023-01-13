import { Request, Response } from "express";
import { prismaClient } from "../database/prisma.client";
import { BadRequestError, ConflictError } from "../helpers/api-errors";
import { createCustomerUser, findByEmail, findByUsername } from "../services/customer.service";

const CustomerController = {
    async create(req: Request, res: Response) {
        const { name, address, phone, email, birth_date, photo, username, password } = req.body

        const usernameExist = await findByUsername(username)
        const emailExist = await findByEmail(email)

        if (usernameExist ) {
            throw new ConflictError('Já existe um cliente com o username informado')
        }
        if (emailExist) {
            throw new ConflictError('Já existe um cliente com o e-mail informado')
        }

        const user = await createCustomerUser(username, password).then(async (resp) => {

            const newCustomer = await prismaClient.customer.create({
                data: {
                    name,
                    address,
                    phone,
                    email,
                    birth_date,
                    photo,
                    userId: resp.id
                }
            })
            res.status(201).json({ user: resp, customer: newCustomer })
        }).catch((err) => {
            console.log(err)
            throw new BadRequestError('Bad Request  criação de Customer')

        })

        console.log(user)

        // return res.status(201).json(newCustomer)
    }
}

export { CustomerController }