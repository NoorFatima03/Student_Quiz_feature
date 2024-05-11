import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Student_course_info{
    @PrimaryColumn()
    course_info_id: number;
    @Column()
    std_id: number;
    @Column()
    course_id: number;
    @Column()
    teacher_id: number; 

}