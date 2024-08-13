import { User } from "./user";

export interface Company {
    id:number
    name: string;
    description:string;
    activity:string;
    address:string;
    phone:string;
    status: number;
    createdAt: Date;
    updateAt: Date;
    users: User[];
}