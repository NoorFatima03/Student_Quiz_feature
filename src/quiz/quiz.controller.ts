import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from 'src/dto/quiz.dto';

@Controller('quiz')
export class QuizContoller {
  constructor(private readonly quizSerivce: QuizService) {}

  // @Get()
  // getHello(): string {
  //   return this.quizSerivce.getHello();
  // }

  @Post()
  create(@Body() createUserDto: CreateQuizDto) {
    return this.quizSerivce.create(createUserDto);
  }

  @Get()
  findAll(){
    return this.quizSerivce.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: number) {
    
    return this.studentService.findOne(+id);
  }*/


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateQuizDto) {
    return this.quizSerivce.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizSerivce.remove(+id);
  }


}
