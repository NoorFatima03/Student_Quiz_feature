import { Body, Controller, Delete, Get, Injectable, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDto } from 'src/dto/course.dto';
import { CourseService } from './course.service';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService : CourseService){}
  getHello(): string {
    return 'Hello World!';
  }
  @Get()
  findAll(){
    return this.courseService.findAll();
  }
 /* @Get()
  findOne(@Param('id') id: number){
    return this.courseService.findOne(id);

  }*/
  @Post('/add')
  create(@Body() createcoursedto : CreateCourseDto){
    return this.courseService.create(createcoursedto); 
  }
  @Patch(':id')
  update(@Param('id') id:string, @Body() updateCourseDto: CreateCourseDto ){
    return this.courseService.update(+id, updateCourseDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string){
    return this.courseService.delete(+id);
  }
}
