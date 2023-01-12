import mongoose from "mongoose";

const connectMongoDatabase = () => {
    console.log('Wait connecting to the database...');

    mongoose.set("strictQuery", false);
    mongoose.connect(`${process.env.MONGODB}`)
        .then(() => console.log('Database connected!'))
        .catch((error) => console.log('Error to connect to database', error.message))

}

export { connectMongoDatabase }