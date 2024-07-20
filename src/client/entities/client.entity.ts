import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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
  
    @Column('int',{ default:0})
    status: number;

  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
}