import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/books/entities/book.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    ){}

  async create(createUserDto: CreateUserDto) {
    
    const book = await this.bookRepository.findOneBy({name: createUserDto.name});

    if(!book){
      throw new BadRequestException('Book not found');
    }

    return await this.userRepository.save({
      ...createUserDto,
      book,
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({id});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.softDelete({id});
  }
}
