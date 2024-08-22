import { Client } from "src/customer/entities/client.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ActivityCompany } from "../dto/activity-company.dto";

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100, unique: true })
    name: string;

    @Column({ length: 100, nullable: true })
    description: string;

    @Column({type:'json', nullable:true})
    activities:ActivityCompany;

    @Column({ length: 100, nullable: true })
    address: string;

    @Column({ length: 100, nullable: true })
    phone: string;

    @Column('int', { default: 1 })
    status: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @OneToMany(() => User, (user) => user.company)
    users: User[];

    @OneToMany(() => Client, (client) => client.company)
    clients: Client[];
}
