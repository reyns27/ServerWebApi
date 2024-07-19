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
  
    @Column('int',{ default:0})
    status: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;
}