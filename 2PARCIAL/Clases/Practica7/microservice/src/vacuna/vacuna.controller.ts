import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { VacunaService } from './vacuna.service';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { VacunaMsg } from 'src/common/constants';

@Controller('vacuna')
export class VacunaController {
  constructor(private readonly vacunaService: VacunaService) {}

  @MessagePattern(VacunaMsg.CREATE)
  create(@Payload() createVacunaDto: CreateVacunaDto) {
    return this.vacunaService.create(createVacunaDto);
  }

  @MessagePattern(VacunaMsg.FIND_ALL)
  findAll() {
    return this.vacunaService.findAll();
  }

  @MessagePattern(VacunaMsg.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.vacunaService.findOne(id);
  }

  @MessagePattern(VacunaMsg.UPDATE)
  update(
    @Payload() id: string,
    @Payload() updateVacunaDto: UpdateVacunaDto,
  ) {
    return this.vacunaService.update(id, updateVacunaDto);
  }

  @MessagePattern(VacunaMsg.DELETE)
  remove(@Payload() id: string) {
    return this.vacunaService.remove(id);
  }
}

