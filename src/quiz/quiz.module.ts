import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizContoller } from './quiz.controller';
import { QuizService } from './quiz.service';
import { Tbl_quizs } from 'src/entities/tbl_quiz.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Tbl_quizs]),],
  controllers: [QuizContoller],
  providers: [QuizService],
})
export class QuizModule {}