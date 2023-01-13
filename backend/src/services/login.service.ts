import { sign } from "jsonwebtoken";
import { prismaClient } from "../database/prisma.client"
import { NotFoundError, Unauthorized } from "../helpers/api-errors"

const createToken = (id: string) => sign({}, `${process.env.SECRET_TOKEN}`, { subject: id, expiresIn: "15m" });

const findUsername = async (username: string) => {
    const userExist = await prismaClient.user.findUnique({
        where: {
            username
        }
    })
    if (!userExist) {
        throw new Unauthorized('Usuário ou senha inválidos')
    }
    return userExist
}



export { createToken, findUsername }