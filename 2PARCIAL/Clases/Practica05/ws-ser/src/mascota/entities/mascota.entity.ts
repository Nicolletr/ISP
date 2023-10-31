import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Mascota {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('varchar',{unique:true})
    id_cliente:string;

    @Column('varchar',{
        unique:true
    })
    //
    @Column('varchar',{unique:true})
    id_tipo_mascota:string;

    @Column('varchar',{
        unique:true
    })
    //
    @Column('varchar',{unique:true})
    id_habito:string;

    @Column('varchar',{
        unique:true
    })
    //

    nombre_mascota:string;

    @Column('text', {nullable:true})
    fecha_nacimiento:string;

    @Column('text',{array:true})
    genero:string[];

    @Column('text', {default:0})
    color: String;

    @Column('text', {default:true})
    esterilizacion:String;
    estado: any;
}

