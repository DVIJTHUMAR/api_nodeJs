import empModel from "../models/empSchema.js";

const allController = {
    defaultEmpController: async (req, res) => {
        const employees = await empModel.find({});
        res.json({
            msg: "Welcome to the Employee API",
            data: employees,
        })
    },
    createEmpController: async (req, res) => {
        const { name, email, contact, salary } = req.body;

        try {
            const employee = new empModel({
                name,
                email,
                contact,
                salary,
            });

            await employee.save();

            res.json({
                msg: 'Employee added successfully',
            })

        } catch (err) {
            console.log("Error in catch block", err);
        }
    },
    singleEmpController: async (req, res) => {
        const { id } = req.params;

        console.log("single id", id);
        try {
            const employee = await empModel.findOne({ _id: id });

            console.log("employee>>", employee);

            res.json({
                msg: `${id} is get single emp`,
                data: employee
            });

        } catch (error) {
            console.log(error);
        }
    },
    updateEmpController: async (req, res) => {

        const { id } = req.params;
        console.log("ID update", id);
        const updates = req.body;

        console.log("updates data old",updates);


        try {
            const newUpdateEmp = await empModel.findByIdAndUpdate({_id:id},updates);

            console.log("newUpdateEmp>>>",newUpdateEmp);

            res.json({
                msg: `${id} Data updated Successfully!`,
                data: newUpdateEmp
            })
        } catch (error) {
            console.log(error);
        }

    },
    deleteEmpController: async (req,res)=>{
        const {id}=req.params;

        try {
            const deleteEmp = await empModel.findByIdAndDelete(id);
            
            res.json({
                msg:`${id} is deleted` ,
                data : deleteEmp 
            })
        } catch (error) {
            console.log(error);
        }
    }



};

export default allController;