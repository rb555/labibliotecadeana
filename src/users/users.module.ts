import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Book } from 'src/books/entities/book.entity';
import { BooksModule } from 'src/books/books.module';
import { BooksService } from 'src/books/books.service';


@Module({
  imports: [TypeOrmModule.forFeature([User]),BooksModule],
  controllers: [UsersController],
  providers: [UsersService, BooksService],
  exports: [],
})
export class UsersModule {}
