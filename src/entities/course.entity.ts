import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Course{
    @PrimaryColumn()
    course_id: number;

    @Column()
    course_name: string;

    @Column()
    credit: number;
    

}