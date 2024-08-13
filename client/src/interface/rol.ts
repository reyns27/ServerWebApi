import { User } from "./user";

export interface Rol {
    Id: number;
    Name: string;
    Description: string;
    status: number;
    createdAt: Date;
    updateAt: Date;
    users: User[];
}