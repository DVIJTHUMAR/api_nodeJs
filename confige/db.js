import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

mongoose.connect(`${process.env.DB_URL}/myCompany`).then(() => {
    console.log("DB conected.......");
}).catch(() => {
    console.log("Error 404 ! Server is not conected...");
})

export default mongoose;