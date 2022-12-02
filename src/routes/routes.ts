import { Router } from "express";
import { CategoryController } from "../controller/category";
import { driverController } from "../controller/driver";


const router = Router()
router
    .get('/category', CategoryController.GET)//Category
    .post('/category', CategoryController.POST)//Category
    .put('/category/:id', CategoryController.PUT)//Category
    .delete('/category/:id', CategoryController.DELETE)//Category

    .get('/drivers', driverController.GET)//Drivers
    .post('/drivers', driverController.POST)//Drivers


export default router; 