import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { VacunaModule } from './vacuna/vacuna.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    VacunaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
