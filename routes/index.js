import express from "express";
const router = express.Router();
import controller from "../controllers/mainController.js"
import empRoutes from '../routes/empRoutes.js'
import menagerRoutes from '../routes/menagerRoutes.js'
import signupController from "../controllers/signupController.js";
import signinController from "../controllers/signinController.js";
import authApi from "../midelwear/authApi.js";

router.get('/', controller.defaultController);
router.use('/emp',authApi,empRoutes)
router.use('/menager',menagerRoutes)

router.post('/signup',signupController.signupController)
router.post('/signin',signinController.signinController)

export default router;