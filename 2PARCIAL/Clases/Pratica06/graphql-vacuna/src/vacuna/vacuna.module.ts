import { Module } from '@nestjs/common';
import { VacunaService } from './vacuna.service';
import { VacunaController } from './vacuna.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VacunaResolver } from './vacuna.resolver';
import { VacunaSchema } from './entities/vacuna.entity';

@Module({
  controllers: [VacunaController],
  providers: [VacunaService, VacunaResolver],
  imports: [
    MongooseModule.forFeature([
      { name: 'vacunas', schema: VacunaSchema },
    ]),
  ],
  exports: [VacunaService, MongooseModule],
})
export class VacunaModule {}
