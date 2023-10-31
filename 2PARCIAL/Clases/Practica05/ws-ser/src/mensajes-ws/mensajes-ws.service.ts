import { Injectable } from '@nestjs/common';
import {Socket} from 'socket.io'
import { Mascota } from '../mascota/entities/mascota.entity'
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MascotaService } from 'src/mascota/mascota.service';

interface ConnectedClients {
    [id:string]: {
       socket: Socket,
       mascota: Mascota
    }
}

@Injectable()
export class MensajesWsService {
    private connectedClients: ConnectedClients={}

    constructor( @InjectRepository(Mascota)
     private readonly mascotaRepository: Repository<Mascota>,
     private readonly mascotaService: MascotaService
      ){}

    async registerClient(client:Socket, name: string){
        console.log(this.mascotaService.prueba());
        const mascota =await  this.mascotaRepository.findOneBy({ nombre_mascota: name });
        if (!mascota) throw new Error('Mascota no encontrado');
        if (!mascota.estado) throw new Error('No activo');

        
        this.connectedClients[client.id]= {socket:client, mascota: mascota};
    }
    removeClient(clientId:string){
        delete this.connectedClients[clientId];
    }
    getConnectedClients():string[]{
        // return Object.keys(this.connectedClients).length;
        // console.log(this.connectedClients)
         return Object.keys(this.connectedClients);
    }
    getStudentFullName(id:string){
        return this.connectedClients[id].mascota.nombre_mascota;
    }
}
