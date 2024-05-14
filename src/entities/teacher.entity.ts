import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { Student_course_info } from "./student_course_info.entity";
import { Tbl_quizs } from "./tbl_quiz.entity";

@Entity()
export class Teachers{
    @PrimaryColumn()
    teacher_id: number; 
    @Column()
    name: string;
    @OneToMany(() => Student_course_info, (studentinfo) => studentinfo.teachers)
    studentinfo: Student_course_info[]
    @OneToMany(() => Tbl_quizs, (quiz) => quiz.teach)
    quiz: Tbl_quizs[]

}