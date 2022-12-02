import { NextFunction, Request, Response } from "express"
import { dataSource } from "../config/ormconfig"
import { categories } from "../entities/category.entity"

export const CategoryController = {
   GET: async (_: Request, res: Response, next: NextFunction) => {
      try {
         const getcategory = await dataSource
            .getRepository(categories)
            .find({
               relations: {
                  driver: true
               }
            })
         res.json(getcategory)
      } catch (error) {
         next(error)
      }
   },
   POST: async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { title, } = req.body
         const { raw } = await dataSource
            .createQueryBuilder()
            .insert()
            .into(categories)
            .values({ category_title: title })
            .returning(['category_id', 'category_title'])
            .execute()
         res.json(raw)
      } catch (error) {
         next(error)
      }
   },
   PUT: async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { id } = req.params
         const { title } = req.body
         const { raw } = await dataSource
            .createQueryBuilder()
            .update(categories)
            .set({ category_title: title })
            .where("category_id = :id", { id })
            .returning(["category_id", "category_title"])
            .execute()
         res.json(raw)
      } catch (error) {
         next(error)
      }
   },
   DELETE: async (req: Request, res: Response, next: NextFunction) => {
      try {
         const { id } = req.params
         const { raw } = await dataSource
            .createQueryBuilder()
            .delete()
            .from(categories)
            .where("category_id = :id", { id })
            .returning(["category_id", "category_title"])
            .execute()

         res.json(raw)
      } catch (error) {
         next(error)
      }
   },
}