import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionDto } from 'src/dto/question.dto';
import { quiz_historyDto } from 'src/dto/student_quiz_history.dto';
import { Std_quiz_history } from 'src/entities/std_quiz_history.entity';
import { Questions } from 'src/entities/tbl_question.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Questions)
        private quest : Repository<Questions>,
        @InjectRepository(Std_quiz_history)
        private quiz_history : Repository<Std_quiz_history>
    ){}

   getHello() {
     return this.quest.find({
       relations:{
        QUIZ: true,
       }
     });
   }

  create(createdto : QuestionDto){
    const que: Questions = new Questions;
    que.question_id = createdto.que_id;
    que.quiz_id = createdto.quiz_id;
    que.question = createdto.question;
    que.options  = createdto.options;
    que.actual_ans = createdto.answer;
    return this.quest.save(que);

  }

  async getquestion(id : number, answers:number){
    let count  = 0;
    
   // const myObj = JSON.parse(ques_id);
   

   //const question: Questions = new Questions();
 /*  const actualAns =  await this.quest.find({
    select:["actual_ans"],
    where:{
      question_id:1
    }
  })
  const questionID = await  this.quest.find({
    select:["question_id"],
    where:{
      quiz_id:3
    }
  })
  console.log(questionID);
  console.log(actualAns);
   //question.question_id = this.quest
   
   for (let x in answers) {
    if(answers[x].ques_id == questionID[x] && answers[x].ans ==actualAns[x]){
      count++;
      console.log(count);
    }
    // console.log(question[x].question_id);
    // console.log(question[x].actual_ans);
    // console.log(answers[x]);


  }
 
    console.log(count);
    //console.log(answers[0].ques_id);
    //console.log(myObj.ques_id);
    //console.log(ans);*/

  
    return  this.quest.find({
      select:["actual_ans","options","question","question_id","quiz_id"],
      where:{
        quiz_id:id
      }
    })
  }


  async getresult(id:number, quiz:any){
    const {answers,quiz_id,student_id} = quiz

    const history:Std_quiz_history = new Std_quiz_history();
   let count  = 0;
    const actualAns =  await this.quest.find({
      select:["actual_ans"],
    })
    const questionID = await  this.quest.find({
      select:["question_id"],
      where:{
        quiz_id:3
      }
    })
    var length = Object.keys(answers).length;
    for (let x =0; x<length; x++) {
      if(answers[x].que_id == questionID[x].question_id && answers[x].ans == actualAns[x].actual_ans){
        count++;
        
  }
}
console.log(quiz);

  history.quiz_id = quiz_id ; 
  history.result = count;
  history.std_id = student_id;
  history.std_submits_ans = answers;
  history.feedback = "";
  // console.log(history);

    return this.quiz_history.save(history);
}






  // storeanswer(createdto: quiz_historyDto){
  //   const STD_QUIZ_HIS:Std_quiz_history = new Std_quiz_history();
  //   STD_QUIZ_HIS.std_id = createdto.std_id;
  //   STD_QUIZ_HIS.quiz_id = createdto.quiz_id;
  //   STD_QUIZ_HIS.std_submits_ans = createdto.std_submits_ans;
  //   STD_QUIZ_HIS.feedback = createdto.feedback;
  //   STD_QUIZ_HIS.result = createdto.result;

    
  //   return this.quiz_history.save(STD_QUIZ_HIS);

  //   // for (let x in answers) {
  //   //     console.log(answers[x]);
  //   //   }

  // }



}
