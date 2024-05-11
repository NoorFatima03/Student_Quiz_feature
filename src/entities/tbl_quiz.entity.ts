import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Tbl_quizs{
    @PrimaryColumn()
    quiz_id: number;
    @Column()
    course_id: number;
    @Column()
    created_at: Date;
    @Column()
    created_by: number;

}