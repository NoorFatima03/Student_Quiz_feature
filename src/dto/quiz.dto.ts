import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateQuizDto  {
    @IsInt()
    @IsNotEmpty()
    quiz_id : number;
    @IsInt()
    @IsNotEmpty()
    course_id : number;
    @IsNotEmpty()
    @IsString()
    teacher_id: number;
    // @IsDate()
    // @IsNotEmpty()
    // created_at : Date;
    
}