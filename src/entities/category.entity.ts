import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { drivers } from "./driver.entity";

@Entity()
export class categories {
    @PrimaryGeneratedColumn('uuid')
    category_id: string

    @Column({ nullable: false })
    category_title: string

    @OneToMany(() => drivers, driver => driver.category)
    driver: drivers[]

}   