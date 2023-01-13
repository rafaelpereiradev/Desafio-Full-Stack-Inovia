import productModel from "../models/product.model";

const findByName = (name:string) => productModel.findOne({name:name});




export {findByName}