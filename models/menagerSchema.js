import mongoose from '../confige/db.js';

const menagerSchema = new mongoose.Schema({
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
    department:
    {
        type: String,
        required: true,
    },

})

const menagerModel = mongoose.model("menagerData", menagerSchema);

export default menagerModel;