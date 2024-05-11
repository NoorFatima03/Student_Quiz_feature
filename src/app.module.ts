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
import { TestModule } from './test/test.module';
import { Std_quiz_history } from './entities/std_quiz_history.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: '11223344',
    username: 'postgres',
    database: 'localhost',
    entities: [Students, Course, Teachers, Questions, Std_quiz_history],
    synchronize: true,
    logging: true,
  }), StudentModule, CourseModule, TeacherModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
