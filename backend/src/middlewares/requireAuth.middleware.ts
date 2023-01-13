import { Response, Request, NextFunction } from 'express';
import { Unauthorized } from '../helpers/api-errors';
import { verify } from 'jsonwebtoken';

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        throw new Unauthorized('Invalid Token')
    }
    const [, token] = authToken.split(" ");

    try {
        verify(token, `${process.env.SECRET_TOKEN}`)
    } catch (err) {
        return res.status(401).json({
            message: 'Invalid Token'
        })
    }


    return next();
}


export { requireAuth }