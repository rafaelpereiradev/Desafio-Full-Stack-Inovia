import { Request, Response } from 'express'
import { BadRequestError, ConflictError } from '../helpers/api-errors';
import productModel from '../models/product.model'
import { findByName } from '../services/product.service';



const ProductController = {

    async getAll(req: Request, res: Response) {
        let allProducts = await productModel.find();
        console.log(allProducts)
        return res.status(200).json(allProducts);
    },

    async create(req: Request, res: Response) {
        const productExist = await findByName(req.body.name)
        if (productExist) {
            throw new ConflictError('Já existe um produto com este nome')
        }
        let newProduct = await productModel.create(req.body);
        return res.status(201).json(newProduct);
    }

}

export default ProductController