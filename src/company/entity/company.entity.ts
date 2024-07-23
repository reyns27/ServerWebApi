import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:100, unique:true})
    name: string;

    @Column({length:100, nullable:true})
    description:string;

    @Column({length:100, nullable:true})
    activity:string;

    @Column({length:100, nullable:true})
    address:string;

    @Column({length:100, nullable:true})
    phone:string;

    @Column('int')
    status: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => User, (user) => user.company)
    users: User[];
}