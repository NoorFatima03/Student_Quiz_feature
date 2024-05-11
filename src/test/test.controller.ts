import { Controller, Get, Param } from '@nestjs/common';

@Controller('tests')
export class TestController {
  constructor(private readonly testController: TestController) {}

  @Get()
  getHello(): string {
    return this.testController.getHello();
  }

  @Get()
  getquestion(@Param('id')  id: number, ){
    return this.testController.getquestion(+id);

  }


}
