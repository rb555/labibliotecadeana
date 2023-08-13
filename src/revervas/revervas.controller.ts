import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RevervasService } from './revervas.service';
import { CreateRevervaDto } from './dto/create-reverva.dto';
import { UpdateRevervaDto } from './dto/update-reverva.dto';

@Controller('revervas')
export class RevervasController {
  constructor(private readonly revervasService: RevervasService) {}

  @Post()
  create(@Body() createRevervaDto: CreateRevervaDto) {
    return this.revervasService.create(createRevervaDto);
  }

  @Get()
  findAll() {
    return this.revervasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.revervasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRevervaDto: UpdateRevervaDto) {
    return this.revervasService.update(+id, updateRevervaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.revervasService.remove(+id);
  }
}
