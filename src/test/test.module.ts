import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Questions } from 'src/entities/tbl_question.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Questions]),],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}