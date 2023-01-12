import { Router } from 'express'
import { loginController } from './controllers/login.controller'
import ProductController from './controllers/product.controller'
import { UserControler } from './controllers/user.controller'

const router = Router()

//relational Controllers
const userController = new UserControler()


//Products routes
router.get('/products/all', ProductController.getAll)
router.post('/products/new', ProductController.create)


//Users routes
router.post('/user/new', userController.createUser)
router.get('/user/:id', userController.findById)


//Login routes

// router.post('/login', loginController.login)


//Auth routes
router.post('/login', loginController.login)

export default router
