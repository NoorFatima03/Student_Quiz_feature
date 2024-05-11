import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class quiz_historyDto  {
    @IsInt()
    //@IsNotEmpty()
    history_id : number;
    @IsInt()
    //@IsNotEmpty()
    std_id : number;
   // @IsNotEmpty()
    @IsInt()
    quiz_id: number;
   // @IsNotEmpty()
    @IsInt()
    std_submits_ans: [];
   // @IsNotEmpty()
    @IsInt()
    result: number;
   // @IsNotEmpty()
    @IsString()
    feedback: string;
    
}