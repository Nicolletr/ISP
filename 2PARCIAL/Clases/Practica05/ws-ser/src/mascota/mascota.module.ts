import { Module } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaController } from './mascota.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mascota } from './entities/mascota.entity';

@Module({
  controllers: [MascotaController],
  providers: [MascotaService],
  imports:[ TypeOrmModule.forFeature([
    Mascota
  ]) ],
  exports:[ MascotaService, TypeOrmModule ]
})
export class MascotaModule {}
