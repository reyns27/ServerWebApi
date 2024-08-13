import { Company } from "./company";
import { Rol } from "./rol";

export interface User {
    Id: number;
    userName: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    rolId: number;
    status: number;
    createdAt: Date;
    updateAt: Date;
    rol: Rol;
    company:Company
}

