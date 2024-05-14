import { IsInt, IsNotEmpty } from "class-validator";

export class CreateStudentcourseDto  {
    @IsInt()
    @IsNotEmpty()
    course_info_id : number;
    @IsInt()
    stud_id : number;
     @IsInt()
     @IsNotEmpty()
     course_id : number;  @IsInt()
     @IsNotEmpty()
     teacher_id : number;
   
   


}