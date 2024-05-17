import express from "express";
const empRouter = express.Router();
import empController from "../controllers/empController.js"

empRouter.get('/',empController.defaultEmpController);
empRouter.post('/',empController.createEmpController);
empRouter.get( '/:id',empController.singleEmpController)
empRouter.put("/:id",empController.updateEmpController)
empRouter.delete("/:id",empController.deleteEmpController)

export default  empRouter;