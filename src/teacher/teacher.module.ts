import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { Teachers } from 'src/entities/teacher.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Teachers]),],
  controllers: [TeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}