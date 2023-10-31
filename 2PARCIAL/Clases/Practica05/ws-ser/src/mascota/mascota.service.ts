import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';
import { Mascota } from './entities/mascota.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MascotaService {

  private readonly logger = new Logger('MascotaService');

  constructor( 
    @InjectRepository(Mascota) 
    private readonly mascotaRepository: Repository<Mascota>,

    ){}

  
  async create(createMascotaDto: CreateMascotaDto) {
    try {
      const mascota =  this.mascotaRepository.create(createMascotaDto);
      await this.mascotaRepository.save(mascota);
      return mascota;
    } catch (error) {
      console.log(error)
      if (error.code==='23505')
        throw new BadRequestException(error.detail)
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado')
    }
    
  }

  findAll() {
    return this.mascotaRepository.find({});
  }

  async findOne(id: string) {
    const mascota= await  this.mascotaRepository.findOneBy ({ id });
    if (!mascota)
      throw new NotFoundException(`Mascota ${id} no encontrado`);
    return mascota;

  }

  async update(id: string, updateMascotaDto: UpdateMascotaDto) {
    const mascota = await this.mascotaRepository.preload({
      id: id,
      ...updateMascotaDto
    });
    if (!mascota) throw new NotFoundException(`Mascota ${id} no encontrado`)

    try {
      await  this.mascotaRepository.save(mascota)
      return mascota;
      
    } catch (error) {
      console.log(error)
    }

  }

  async remove(id: string) {
    const mascota = await this.findOne(id);
    await this.mascotaRepository.remove(mascota);

  }
  prueba():String[]{
    return ['uno','dos','tres'];
  }
}
