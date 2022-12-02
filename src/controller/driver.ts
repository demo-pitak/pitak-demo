import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { drivers } from "../entities/driver.entity"

export const driverController = {
    GET: async (_: Request, res: Response, next: NextFunction) => {
        try {
            const getcategory = await dataSource
                .getRepository(drivers)
                .find({
                    relations: {
                        category: true
                    }
                })
            res.json(getcategory)
        } catch (error) {
            next(error)
        }
    },
    POST: async (req: Request, res: Response, next: NextFunction) => {
        try {
            const {
                name,
                number,
                car_number,
                car_type,
                catId
            } = req.body
            const { raw } = await dataSource
                .createQueryBuilder()
                .insert()
                .into(drivers)
                .values({
                    driver_name: name,
                    driver_number: number,
                    car_number: car_number,
                    car_type: car_type,
                    category: catId
                })
                .returning(['driver_id', 'driver_name', 'driver_number'])
                .execute()
            res.json(raw)
        } catch (error) {
            next(error)
        }
    },
}