import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Students } from './entities/student.entity';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { Course } from './entities/course.entity';
import { Teachers } from './entities/teacher.entity';
import { TeacherModule } from './teacher/teacher.module';
import { QuestionModule } from './questions/question.module';
import { Questions } from './entities/tbl_question.entity';
import { Std_quiz_history } from './entities/std_quiz_history.entity';
import { Student_course_info } from './entities/student_course_info.entity';
import { StudentCourseModule } from './Student_course_info/studentinfo.module';
import { QuizModule } from './quiz/quiz.module';
import { Tbl_quizs } from './entities/tbl_quiz.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '11223344',
    username: 'postgres',
    database: 'localhost',
    entities: [Students, Course, Teachers, Questions, Std_quiz_history,Student_course_info, Tbl_quizs],
    synchronize: true,
    logging: true,
  }), StudentModule, CourseModule, TeacherModule, QuestionModule, StudentCourseModule, QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
