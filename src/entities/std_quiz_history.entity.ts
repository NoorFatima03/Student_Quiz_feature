import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tbl_quizs } from "./tbl_quiz.entity";

@Entity()
export class Std_quiz_history{
    @PrimaryGeneratedColumn()
    quiz_history_id: number;
    @Column()
    
    std_id: number;
    @Column()
    quiz_id: number;
    @Column(
        "varchar",
        {
         array: true,
        default: [],
        nullable: false,})
    std_submits_ans:[];
    @Column()
    result: number;
    @Column()
    feedback: string;
    @ManyToOne(() => Tbl_quizs, (quiz) => quiz.history)
    @JoinColumn({
        name: 'quiz_id'
    })
    quiz: Tbl_quizs;

}