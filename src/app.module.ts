import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';


@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3308,
    username: 'user_crud',
    password: 'root',
    database: 'db_crud',
    autoLoadEntities: true,
    synchronize: true,
  }),
  UsersModule,
  BooksModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
