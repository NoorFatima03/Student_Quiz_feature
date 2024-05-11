import { Module } from '@nestjs/common';

import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { Students } from 'src/entities/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [TypeOrmModule.forFeature([Students]),],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}