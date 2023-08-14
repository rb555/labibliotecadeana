import { Book } from "src/books/entities/book.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
 

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: String; 

    @Column()
    email: string;

    @DeleteDateColumn()
    deleteAt: Date;

    @ManyToOne(() => Book, (book) => book.id,{
        eager: true,  //nos trae todos los libros al hacer el findOne
    })
    book: Book;

    
    
}
