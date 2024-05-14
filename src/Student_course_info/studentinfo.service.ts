import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentcourseDto } from 'src/dto/student_course_info.dto';
import { Student_course_info } from 'src/entities/student_course_info.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentCourseService {
    constructor(
        @InjectRepository(Student_course_info)
        private studcourseinfoRepo : Repository<Student_course_info>
    ){}
  getHello(): string {
    return 'Hello World!';
  }

  async findAll(){
   // return this.studcourseinfoRepo.find()
      return this.studcourseinfoRepo.find({
          relations:{
              students :true,
              course: true,
              teachers: true,
          }
      });
  }  
   create(createcoursedto: CreateStudentcourseDto){
    const stdcourses: Student_course_info = new Student_course_info();
    stdcourses.course_info_id = createcoursedto.course_info_id;
    stdcourses.stud_id = createcoursedto.stud_id;
    stdcourses.course_id = createcoursedto.course_id;
    stdcourses.teacher_id = createcoursedto.teacher_id;
    return this.studcourseinfoRepo.save(stdcourses);
     
}
}