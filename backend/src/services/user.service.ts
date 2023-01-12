import { prismaClient } from "../database/prisma.client"
import { hash } from "bcrypt"


const findById = async (id: string) => await prismaClient.user.findUnique({ where: { id } })
const createPasswordHash = async (password: string) => await hash(password, 8)



export { findById, createPasswordHash }

