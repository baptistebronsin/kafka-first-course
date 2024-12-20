import { Injectable, OnModuleInit, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject('HERO_SERVICE') private readonly heroClient: ClientKafka
  ) {}

  async onModuleInit() {
    // Attendez que le client Kafka soit prêt
    await this.heroClient.connect();
  }
}
