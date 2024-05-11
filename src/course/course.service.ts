import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCourseDto } from 'src/dto/course.dto';
import { Course } from 'src/entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private course:Repository<Course>
    ){}
  getHello(): string {
    return 'Hello World!';
  }
 /* findOne(id: number){
    return this.course.findOneBy({id});
  }*/

  findAll(): Promise<Course[]>{
    return this.course.find();
  }
   create(createcoursedto: CreateCourseDto){
    const courses: Course = new Course();
    courses.course_id = createcoursedto.id;
    courses.course_name = createcoursedto.name;
    courses.credit = createcoursedto.credit;
    return this.course.save(courses);
   }
   update(id: number, createcoursedto: CreateCourseDto){
    const courses: Course = new Course();
    courses.course_id = id;
    courses.course_name = createcoursedto.name;
    courses.credit = createcoursedto.credit;
    return this.course.save(courses);
   }
   delete(id:number){
    this.course.delete(id);
    return `#${id} has been removed`;

   }
}
