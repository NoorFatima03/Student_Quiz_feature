import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Teachers } from "./teacher.entity";
import { Course } from "./course.entity";
import { Questions } from "./tbl_question.entity";
import { Std_quiz_history } from "./std_quiz_history.entity";

@Entity()
export class Tbl_quizs{
    @PrimaryColumn()
    quiz_id: number;
    @Column({name:"course_id"})
    course_id: number;
    // @Column()
    // created_at: Date;
    @Column({name:"teacher_id"})
    teacher_id: number;
    @ManyToOne(() => Teachers, (teach) => teach.quiz)
    @JoinColumn({
        name: 'teacher_id'
    })
    teach: Teachers
    @ManyToOne(() => Course, (course) => course.quizz)
    @JoinColumn({
        name: 'course_id'
    })
    course: Teachers
    @OneToMany(() => Questions, (question) => question.QUIZ)
    question: Questions[]
    @OneToMany(() => Std_quiz_history, (history) => history.quiz)
    history: Std_quiz_history[]


}