import { Router } from 'express'
import ProductController from './controllers/product.controller'
import { UserControler } from './controllers/user.controller'

const router = Router()
//relational Controllers
const createUser = new UserControler()
//Products routes
router.get('/products/all', ProductController.getAll)
router.post('/products/new', ProductController.create)

//Users routes
router.post('/user/new', createUser.createUser)



export default router
