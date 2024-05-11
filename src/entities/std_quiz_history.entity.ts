import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}