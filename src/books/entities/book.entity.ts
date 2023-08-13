import { Column, Entity, OneToMany } from "typeorm";
import {User} from "src/users/entities/user.entity";

@Entity()
export class Book {

    @Column({primary:true, generated: true})
    id: number;

    @Column({length: 500})
    name: string;

    @Column({length: 50})
    author: string;

    @OneToMany(() => User, (user) => user.book)
    users: User[];
}
