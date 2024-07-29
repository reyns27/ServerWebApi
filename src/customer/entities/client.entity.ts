import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { referenceCLient } from "../dto/reference-client.dto";


class referenceObject  {
    
    reference_type:string;
   
    name:string;
    
    phone:string;
}

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column({ length: 50, nullable: false })
    Name: string;
  
    @Column({ length: 50, nullable: false })
    lastName: string;
  
    @Column({ length: 50, nullable: true })
    email: string;
  
    @Column({ length: 100, nullable: true })
    direction: string;

    @Column({ length: 50, nullable: true })
    phone: string;

    @Column('date',{nullable:true})
    date: Date;

    @Column('char', {nullable:true})
    sex:string;

    @Column({length:100, nullable:true})
    nationality:string;

    @Column({type:'decimal', precision:16, scale:2, default:0.00})
    income:number;
  
    @Column({type:'varchar', unique:true, nullable:true})
    identification_document: string;

    @Column({unique:true, default:'N/A'})
    identification_document_url:string;

    @Column({nullable:true})
    home:string;

    @Column({default:0})
    dependents:number;

    @Column({length:100, nullable:true})
    academic_level:string;

    @Column({type:'json', nullable:true})
    references:referenceCLient;

    @Column('int',{ default:1})
    status: number;

  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
}