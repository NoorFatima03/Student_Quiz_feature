import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from 'src/dto/quiz.dto';
//import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from 'src/entities/tbl_question.entity';
import { Tbl_quizs } from 'src/entities/tbl_quiz.entity';
import { Repository } from 'typeorm';
//import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
constructor(
    @InjectRepository(Tbl_quizs)
    private tbl_quiz : Repository<Tbl_quizs>
){}

  getHello(): string {
    return 'Hello World!';
  }


  
  findAll(){
    return this.tbl_quiz.find({
      relations:{
          teach: true,
          course:true,
          question:true,
          history: true,
      }
  });
   }
   
  /*findOne(id: number) {
    return this.student.findOneBy({id});
}*/
   create(createdto: CreateQuizDto){
    const quiz:Tbl_quizs = new Tbl_quizs();
    quiz.quiz_id = createdto.quiz_id;
    quiz.course_id=createdto.course_id;
    quiz.teacher_id = createdto.teacher_id;
    //quiz.created_at= createdto.created_at;
    
    return this.tbl_quiz.save(quiz);

   }
   update(id: number, updatedto: CreateQuizDto){
    const quiz:Tbl_quizs = new Tbl_quizs();
    quiz.quiz_id = id;
    quiz.course_id=updatedto.course_id;
    quiz.teacher_id = updatedto.teacher_id;
    //quiz.created_at= updatedto.created_at;
    
    return this.tbl_quiz.save(quiz);
  }
   remove(id: number){
     this.tbl_quiz.delete(id);
     return `#${id} has been removed`;

   }
}
