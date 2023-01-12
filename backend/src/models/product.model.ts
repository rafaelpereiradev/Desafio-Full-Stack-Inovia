import mongoose, { Schema } from 'mongoose';


const ProductModel = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    brand: {
        type: String,
    },
    tax: {
        type: Number,
        require: true,
    },

    stock: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
    },
    particulars: {
        type:[
            {
                name: String,
                description: String,
                value: String
            }
        ],
    },
}, {
    timestamps: true,
    id: true,
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id
            delete ret._id
        }
    }
})
export default mongoose.model('Product', ProductModel)