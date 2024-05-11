import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class TeacherCreateDto {
    @IsInt()
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    @IsString()
    name: string;
   
    
}