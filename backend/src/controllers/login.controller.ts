import { Request, Response } from "express"
import { compare } from "bcrypt"
import { createToken, findUsername } from "../services/auth.service"
import { NotFoundError, Unauthorized } from "../helpers/api-errors"
import { sign } from "jsonwebtoken"
// import { createToken } from "../services/user.service"


const loginController = {

    async login(req: Request, res: Response) {
        const { username, password } = req.body;

        const userExist = await findUsername(username)

        const passwordIsValid = await compare(password, userExist.password)

        if (!passwordIsValid) {
            throw new Unauthorized('Usuário ou senha inválidos')
        }
        const token = createToken(userExist.id)

        res.status(200).json({ token: token })
    }

}

export { loginController }