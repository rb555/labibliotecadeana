import { Column, Entity, OneToMany } from "typeorm";
import {User} from "src/users/entities/user.entity";


@Entity()
export class Book {

    @Column({primary:true, generated: true})
    id: number;

    @Column()
    name: string;

    @OneToMany(() => User, (user) => user.book)
    users: User[];
}
