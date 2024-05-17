import menagerModel from "../models/menagerSchema.js";

const allMenagerController = {

    defaultMenagerController: async (req, res) => {
        const menagers = await menagerModel.find({});
        res.json({
            msg: "Menager Controller",
            data: menagers
        })
    },
    createMenagerController: async (req, res) => {
        const { name, email, department } = req.body;

        try {
            const menager = new menagerModel({
                name,
                email,
                department,

            });

            await menager.save();

            res.json({
                msg: 'Menager added successfully',
            })

        } catch (err) {
            console.log("Error in catch block", err);
        }
    },
    singleMenagerController: async (req, res) => {
        const { id } = req.params;

        console.log("single id menager", id);
        try {
            const menager = await menagerModel.findOne({ _id: id });

            console.log("menager>>", menager);

            res.json({
                msg: `${id} is get single Menager`,
                data: menager
            });

        } catch (error) {
            console.log(error);
        }
    },
    updateMenagerController: async (req, res) => {
        const { id } = req.params;
        console.log("ID update menager", id);
        const updatesMenager = req.body;

        console.log("updates data old", updatesMenager);


        try {
            const newUpdateMenager = await menagerModel.findByIdAndUpdate({ _id: id }, updatesMenager);

            console.log("newUpdateEmp>>>", newUpdateMenager);

            res.json({
                msg: `${id} Data updated menager Successfully!`,
                data: newUpdateMenager
            })
        } catch (error) {
            console.log(error);
        }
    },
    deleteMenagerController: async (req, res) => {
        const { id } = req.params;

        try {
            const deleteMenager = await menagerModel.findByIdAndDelete(id);

            res.json({
                msg: `${id} is deleted menager`,
                data: deleteMenager
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default allMenagerController;