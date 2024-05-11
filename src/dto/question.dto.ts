import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class QuestionDto  {
    @IsInt()
    @IsNotEmpty()
    que_id : number;
    @IsInt()
    @IsNotEmpty()
    quiz_id : number;
    @IsNotEmpty()
    @IsString()
    question: string;
    @IsNotEmpty()
    @IsString()
    options: string;
    @IsNotEmpty()
    @IsString()
    answer: number;
    
}