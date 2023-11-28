import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VacunaMSG } from '../common/constants';
import { Observable } from 'rxjs';
import { VacunaDTO } from './dto/vacuna.dto';
import { ClientProxyVeterinaria } from '../common/proxy/client-proxy';
import { IVacuna } from './entities/vacuna.entity';

@Controller('api/vacuna')
export class UserController {
  constructor(private readonly clientProxy: ClientProxyVeterinaria) {}
  private _clientProxyUser = this.clientProxy.clientProxyCompras();

  @Post()
  create(@Body() userDTO: VacunaDTO): Observable<IVacuna> {
    return this._clientProxyUser.send(VacunaMSG.CREATE, userDTO);
  }

  @Get()
  findAll(): Observable<IVacuna[]> {
    return this._clientProxyUser.send(VacunaMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IVacuna> {
    return this._clientProxyUser.send(VacunaMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() userDTO: VacunaDTO,
  ): Observable<IVacuna> {
    return this._clientProxyUser.send(VacunaMSG.UPDATE, { id, userDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyUser.send(VacunaMSG.DELETE, id);
  }
}
