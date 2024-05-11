import {  Injectable } from '@nestjs/common';
//import { InjectRepository } from '@nestjs/typeorm';
import { Questions } from 'src/entities/tbl_question.entity';
//import { Repository } from 'typeorm';

@Injectable()
export class TestService {
//constructor(
    //@InjectRepository(Questions)
    //private questions : Repository<Questions>
//){}

  getHello(): string {
    return 'Hello World!';
  }

  getquestion(id : number){
    const que : Questions = new Questions;
    
    
    if(id == que.quiz_id){
         console.log(que.question);
    }
    

  }
}
