import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateStudentDto  {
    @IsInt()
    @IsNotEmpty()
    stud_id : number;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    email: string;
     @IsNotEmpty()
     @IsInt()
    pass: number;
}