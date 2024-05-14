import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Student_course_info } from "./student_course_info.entity";
import { Tbl_quizs } from "./tbl_quiz.entity";

@Entity()
export class Course{
    @PrimaryColumn()
    course_id: number;

    @Column()
    course_name: string;

    @Column()
    credit: number;
    
    @OneToMany(() => Student_course_info, (student) => student.course)
    student_course_info: Student_course_info[]
    @OneToMany(() => Tbl_quizs, (quizz) => quizz.course)
    quizz: Tbl_quizs[]
}