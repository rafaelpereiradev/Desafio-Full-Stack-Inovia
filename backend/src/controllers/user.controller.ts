import { Request, Response } from 'express'
import { prismaClient } from '../database/prisma.client'
import { NotFoundError } from '../helpers/api-errors'
import { createPasswordHash } from '../services/user.service'


export class UserControler {

    async createUser(req: Request, res: Response) {
        const { username, password } = req.body
        const hashPassword = await createPasswordHash(password)
        const newUser = await prismaClient.user.create({
            data: {
                username,
                password:hashPassword,
            }
        })
        return res.status(201).json(newUser)
    }

    async findById(req: Request, res: Response) {
        const { id } = req.params
        const userFound = await prismaClient.user.findUnique({
            where: {
                id,
            }
        })

        if (!userFound) {
            throw new NotFoundError('O usuário não existe')
        }
        
        return res.status(200).json(userFound)
    }

} 