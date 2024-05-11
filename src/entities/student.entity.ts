import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Students{
    @PrimaryColumn()
    std_id: number;
    @Column()
    name: string;
    @Column()
    email: string;
    @Column()
    password: number;



}