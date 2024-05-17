import mongoose from '../confige/db.js';

const empSchema = new mongoose.Schema({
    name:
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
    contact:
    {
        type: String,
        required: true,
        unique: true,
    },
    salary:
    {
        type: String,
        required: true,
    },

})

const empModel = mongoose.model("employeeData", empSchema);

export default empModel;