import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from 'src/dto/createdto';
import { Students } from 'src/entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Students)
    private student: Repository<Students>,
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  findAll():Promise<Students[]>{
    return this.student.find({
      relations:{
          stdcourseinfo: true,
      }
  });
   }
   
  /*findOne(id: number) {
    return this.student.findOneBy({id});
}*/
   create(createStudent: CreateStudentDto){
    const stud:Students = new Students();
    stud.stud_id = createStudent.stud_id;
    stud.name= createStudent.name;
    stud.email = createStudent.email;
    stud.password = createStudent.pass;
    return this.student.save(stud);

   }
   update(id: number, updateStudent: CreateStudentDto){
    const stud:Students = new Students();
    stud.stud_id = id; 
    stud.name = updateStudent.name;
    stud.email = updateStudent.email;
    stud.password = updateStudent.pass;
    return this.student.save(stud);
  }
   remove(id: number){
     this.student.delete(id);
     return `#${id} has been removed`;

   }

}
