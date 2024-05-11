import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeacherCreateDto } from 'src/dto/teacher.dto';
import { Teachers } from 'src/entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
    constructor(
        @InjectRepository(Teachers)
        private teacher : Repository<Teachers>
    ){}


  getHello(): string {
    return 'Hello World!';
  }

  /* findOne(id: number){
    return this.course.findOneBy({id});
  }*/

  findAll(): Promise<Teachers[]>{
    return this.teacher.find();
  }
   create(createcoursedto: TeacherCreateDto){
    const teach: Teachers = new Teachers();
    teach.teacher_id = createcoursedto.id;
    teach.name = createcoursedto.name;
    return this.teacher.save(teach);
   }
   update(id: number, createcoursedto: TeacherCreateDto){
    const teach: Teachers = new Teachers();
    teach.teacher_id = id;
    teach.name = createcoursedto.name;
     return this.teacher.save(teach);
   }
   delete(id:number){
    this.teacher.delete(id);
    return `#${id} has been removed`;

   }
}
