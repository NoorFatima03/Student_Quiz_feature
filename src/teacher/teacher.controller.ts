import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherCreateDto } from 'src/dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  findAll(){
    return this.teacherService.findAll();
  }
 /* @Get()
  findOne(@Param('id') id: number){
    return this.courseService.findOne(id);

  }*/
  @Post('/add')
  create(@Body() createcoursedto : TeacherCreateDto){
    return this.teacherService.create(createcoursedto); 
  }
  @Patch(':id')
  update(@Param('id') id:string, @Body() updateCourseDto: TeacherCreateDto ){
    return this.teacherService.update(+id, updateCourseDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string){
    return this.teacherService.delete(+id);
  }
}
