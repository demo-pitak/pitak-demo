import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { categories } from "./category.entity";

@Entity({ name: 'driver' })
export class drivers {
    @PrimaryGeneratedColumn('uuid')
    driver_id: string

    @Column({ nullable: false })
    driver_name: string

    @Column({
        type: "varchar",
        length: 255,
        nullable: false
    })
    driver_number: string

    @Column({
        type: "varchar",
        length: 255,
        nullable: false
    })
    car_number: string

    @Column({
        type: "varchar",
        length: 255,
        nullable: false
    })
    car_type: string


    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    time: string;

    @ManyToOne(() => categories, category => category.driver)
    category: categories[]





}