import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Teachers{
    @PrimaryColumn()
    teacher_id: number; 
    @Column()
    name: string;


}