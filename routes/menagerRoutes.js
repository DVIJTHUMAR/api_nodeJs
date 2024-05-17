import express from "express";
import menagerController from "../controllers/menagerController.js"
const menagerRouter = express.Router();

menagerRouter.get('/',menagerController.defaultMenagerController);
menagerRouter.post('/',menagerController.createMenagerController);
menagerRouter.get( '/:id',menagerController.singleMenagerController)
menagerRouter.put("/:id",menagerController.updateMenagerController)
menagerRouter.delete("/:id",menagerController.deleteMenagerController)

export default  menagerRouter;