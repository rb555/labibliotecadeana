import { Module } from '@nestjs/common';
import { RevervasService } from './revervas.service';
import { RevervasController } from './revervas.controller';

@Module({
  controllers: [RevervasController],
  providers: [RevervasService],
})
export class RevervasModule {}
