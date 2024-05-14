import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Tbl_quizs } from "./tbl_quiz.entity";

@Entity()
export class Questions{
    @PrimaryColumn()
    question_id: number;

   @Column({name:"quiz_id"})
    quiz_id:number;
    @Column()
    question: string;
    @Column()
    actual_ans: number;
    @Column()
    options: string;
    @ManyToOne(() => Tbl_quizs, (QUIZ) => QUIZ.question)
    @JoinColumn({
        name: 'quiz_id'
    })
    QUIZ: Tbl_quizs;

}