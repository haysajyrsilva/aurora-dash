import { Module } from '@nestjs/common';
import { GamificationController } from './gamefication.controller';

@Module({
  controllers: [GamificationController],
})
export class GamificationModule {}
