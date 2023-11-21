import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';
import { Model } from 'mongoose'; // Importa Model desde mongoose
import { InjectModel } from '@nestjs/mongoose';
import { Vacuna } from './entities/vacuna.entity';

@Injectable()
export class VacunaService {
  private readonly logger = new Logger('VacunaService');

  constructor(
    @InjectModel('vacunas')
    private readonly vacunaModel: Model<Vacuna>,
  ) {}

  async create(createVacunaDto: CreateVacunaDto) {
    try {
      const vacuna = new this.vacunaModel(createVacunaDto);
      await vacuna.save();
      return vacuna;
    } catch (error) {
      console.log(error);
      if (error.code === 11000)
        throw new BadRequestException('Registro duplicado');
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    return this.vacunaModel.find({}).exec();
  }

  async findOne(id: string) {
    const vacuna = await this.vacunaModel.findById(id).exec();
    if (!vacuna) {
      throw new NotFoundException(`Vacuna ${id} no encontrado`);
    }
    return vacuna;
  }

  async update(id: string, updateVacunaDto: UpdateVacunaDto) {
    const vacuna = await this.vacunaModel
      .findByIdAndUpdate(id, updateVacunaDto, { new: true })
      .exec();
    if (!vacuna) {
      throw new NotFoundException(`vacuna ${id} no encontrado`);
    }
    return vacuna;
  }

  async remove(id: string) {
    const vacuna = await this.findOne(id);
    await vacuna.updateOne({ active:false });
    return vacuna;
  }

  async updateAllActive() {
    await this.vacunaModel.updateMany({active:true});
  }

  prueba(): string[] {
    return ['uno', 'dos', 'tres'];
  }
}
