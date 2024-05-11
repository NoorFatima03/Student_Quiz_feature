import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from 'src/dto/createdto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

 /* @Get()
  getHello(): string {
    return this.studentService.getHello();
  }*/
  @Post()
  create(@Body() createUserDto: CreateStudentDto) {
    return this.studentService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: number) {
    
    return this.studentService.findOne(+id);
  }*/


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateStudentDto) {
    return this.studentService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
