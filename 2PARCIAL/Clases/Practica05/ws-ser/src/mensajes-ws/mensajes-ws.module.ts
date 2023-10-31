import { Module } from '@nestjs/common';
import { MensajesWsService } from './mensajes-ws.service';
import { MensajesWsGateway } from './mensajes-ws.gateway';
import { MascotaModule } from '../mascota/mascota.module';
//  'src/mascota/mascota.module';

@Module({
  providers: [MensajesWsGateway, MensajesWsService],
  imports:[MascotaModule]
})
export class MensajesWsModule {}
