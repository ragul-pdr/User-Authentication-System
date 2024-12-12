import mongoose from "mongoose"

export const connectDB= async()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI)

        console.log(`Mongo Db Connected on: ${conn.connection.host}`);
        
    } catch (error) {
        console.log('Error connection to mongoDB: ',error);
        process.exit(1)
        // 0->status code is success
        // 1->status code is failure
        
    }
}