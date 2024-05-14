import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student_course_info } from 'src/entities/student_course_info.entity';
import { StudentCourseController } from './studentinfo.controller';
import { StudentCourseService } from './studentinfo.service';


@Module({
  imports: [TypeOrmModule.forFeature([Student_course_info]),],
  controllers: [StudentCourseController],
  providers: [StudentCourseService],
})
export class StudentCourseModule {}
