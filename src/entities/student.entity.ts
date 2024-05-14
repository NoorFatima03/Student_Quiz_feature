import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Student_course_info } from "./student_course_info.entity";

@Entity()
export class Students{
    @PrimaryColumn()
    stud_id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: number;
    @OneToMany( ()=> Student_course_info, (stdcourseinfo) => stdcourseinfo.students)
    stdcourseinfo: Student_course_info[];



}