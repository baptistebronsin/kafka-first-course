import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('first-course')
  handleFirstCourseMessage(@Payload() message: any) {
    console.log("Message reçu depuis le topic 'first-course' :", message);
  }
}