import { Company } from "src/company/entity/company.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ length: 50, nullable: false })
    userName: string;

    @Column({ length: 50, nullable: false })
    name: string;

    @Column({ length: 50, nullable: false })
    lastName: string;

    @Column({ length: 50, nullable: false })
    email: string;

    @Column({ length: 255, nullable: false })
    password: string;

    @Column()
    rolId: number;

    @Column({ nullable: false, default:0 })
    companyId: number;

    @Column('int')
    status: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @ManyToOne(() => Rol, (rol) => rol.users)
    rol: Rol;

    @ManyToOne(() => Company, (company) => company.users)
    company: Company
}
