import { Injectable, OnModuleInit, Inject, OnModuleDestroy } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject('HERO_SERVICE') private readonly heroClient: ClientKafka
  ) {}

  async onModuleInit() {
    // Attendez que le client Kafka soit prêt
    await this.heroClient.connect();
  }

  async onModuleDestroy() {
    // Déconnectez le client Kafka
    await this.heroClient.close();
  }
}
