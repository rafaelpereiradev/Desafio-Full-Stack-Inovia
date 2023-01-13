import { Router } from 'express'
import { CustomerController } from './controllers/customer.controller'
import { loginController } from './controllers/login.controller'
import { orderController } from './controllers/order.controller'
import ProductController from './controllers/product.controller'
import { UserControler } from './controllers/user.controller'
import { requireAuth } from './middlewares/requireAuth.middleware' // Middleware require Authentication

const router = Router()

//relational Controllers
const userController = new UserControler()


//Products routes
router.get('/products/all',ProductController.getAll)
router.post('/products/new', requireAuth,ProductController.create)


//Users routes
router.post('/user/new', userController.createUser)
router.get('/user/:id', userController.findById)


//Customer routes
router.post('/customer/new',requireAuth, CustomerController.create)

// router.post('/login', loginController.login)

// Order routes
router.post('/order/new',orderController.create)
//Auth routes
router.post('/login', loginController.login)

export default router
