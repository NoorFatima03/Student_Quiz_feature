import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionDto } from 'src/dto/question.dto';
import { quiz_historyDto } from 'src/dto/student_quiz_history.dto';

@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  /*@Get()
  getHello() {
    return this.questionService.getHello();
  }*/


  @Get(':id')
   getquestion(@Param('id')  id: number, @Body() answers:number){
      return this.questionService.getquestion(id, answers);

}
@Post('/add')
create(@Body() createdto: QuestionDto ){
  return this.questionService.create(createdto);
}
// @Post('/result')
// store(@Body() createdto: quiz_historyDto){
//   return this.questionService.storeanswer(createdto);
// }
@Post('/answer')
getresult(@Param('id') id: number, @Body() createdto: QuestionDto){
  return this.questionService.getresult(id,createdto);
}









  
}
