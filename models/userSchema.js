import mongoose from '../confige/db.js';

const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true,
        unique: true,
    },
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    password:
    {
        type: String,
        required: true,
        
    }

})

const userModel = mongoose.model("userData", userSchema);

export default userModel;