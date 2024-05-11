import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCourseDto  {
    @IsInt()
    @IsNotEmpty()
    id : number;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    credit: number;
    
}