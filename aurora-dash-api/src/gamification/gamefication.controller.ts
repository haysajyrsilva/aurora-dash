import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';

@Controller('gamification')
export class GamificationController {
  
  @Get()
  findAll() {
    return {
      message: 'Get all gamification data',
      data: []
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      message: `Get gamification data for ID: ${id}`,
      data: { id }
    };
  }

  @Post()
  create(@Body() createDto: any) {
    return {
      message: 'Create new gamification entry',
      data: createDto
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return {
      message: `Update gamification entry ${id}`,
      data: { id, ...updateDto }
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      message: `Delete gamification entry ${id}`,
      data: { id }
    };
  }
}
