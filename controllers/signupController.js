import userModel from "../models/userSchema.js";

const signupController = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            if (password == confirmPassword) {
                const newUser = new userModel({
                    username,
                    email,
                    password,
                })

                await newUser.save();

                res.json({ msg: `${username} has been registered successfully!`, data: newUser });

            } else {

                res.json({ msg: 'Passwords do not match!' });
            }
        } else {
            res.json({msg:`${username} is already Created...`})
        }

    } catch (error) {

        console.log('err', error);
        res.json({msg:"somthing  went wrong!"});
    }
}

export default { signupController };