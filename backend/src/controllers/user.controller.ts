import { Request, Response } from 'express'
import { prismaClient } from '../database/prisma.client'


export class UserControler {

    async createUser(req: Request, res: Response) {
        const { username, password } = req.body
        const newUser = await prismaClient.user.create({
            data: {
                username,
                password
            }
        })
        return res.status(201).json(newUser)
    }

} 