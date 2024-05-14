import { Body, Controller, Get, Post } from '@nestjs/common';
import { StudentCourseService } from './studentinfo.service';
import { CreateStudentcourseDto } from 'src/dto/student_course_info.dto';

@Controller('/stdcourse')
export class StudentCourseController {
  constructor(private readonly studentcourseService: StudentCourseService) {}

  @Get()
  findAll() {
    return this.studentcourseService.findAll();
  }
   @Post('create')
  create(@Body() createdto: CreateStudentcourseDto) {
     return this.studentcourseService.create(createdto);
   }

}
