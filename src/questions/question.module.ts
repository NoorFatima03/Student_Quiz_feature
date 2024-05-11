import { Module } from '@nestjs/common';

import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from 'src/entities/tbl_question.entity';
import { Std_quiz_history } from 'src/entities/std_quiz_history.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Questions,Std_quiz_history]),],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}