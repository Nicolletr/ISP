import {
  Controller,
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

@Controller('vacuna')
export class VacunaController {
  constructor(private readonly vacunaService: VacunaService) {}

  @Post()
  create(@Body() createVacunaDto: CreateVacunaDto) {
    return this.vacunaService.create(createVacunaDto);
  }

  @Get()
  findAll() {
    return this.vacunaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.vacunaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEstudianteDto: UpdateVacunaDto,
  ) {
    return this.vacunaService.update(id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.vacunaService.remove(id);
  }
}
