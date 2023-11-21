import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Vacuna} from './entities/vacuna.entity';
import { VacunaService } from './vacuna.service';
import { CreateVacunaDto } from './dto/create-vacuna.dto';
import { UpdateVacunaDto } from './dto/update-vacuna.dto';

@Resolver(() => Vacuna)
export class VacunaResolver {
  constructor(private readonly vacunaService: VacunaService) {}

  @Query(() => [Vacuna], { name: 'vacunas' })
  async getVacunas(): Promise<Vacuna[]> {
    return this.vacunaService.findAll();
  }

  @Query(() => Vacuna, { name: 'vacuna' })
  async getVacunaa(@Args('id', { type: () => ID }) id: string): Promise<Vacuna> {
    return this.vacunaService.findOne(id);
  }

  @Mutation(() => Vacuna)
  async createVacunaa(
    @Args('createVacunaDto') createVacunaDto: CreateVacunaDto,
  ): Promise<Vacuna> {
    return this.vacunaService.create(createVacunaDto);
  }

  @Mutation(() => Vacuna)
  async updateVacuna(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateVacunaDto') updateVacunaDto: UpdateVacunaDto,
  ): Promise<Vacuna> {
    return this.vacunaService.update(id, updateVacunaDto);
  }

  @Mutation(() => Vacuna)
  async removeVacuna(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<Vacuna> {
    return this.vacunaService.remove(id);
  }
  @Mutation(() => Vacuna)
  async updateAllActiveVacuna(): 
  Promise<void> {
    return this.vacunaService.updateAllActive();
  }
}
