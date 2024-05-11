import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Questions{
    @PrimaryColumn()
    question_id: number;
    @Column()
    quiz_id:number;
    @Column()
    question: string;
    @Column()
    actual_ans: number;
    @Column()
    options: string;

}