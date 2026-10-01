import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { SensorsService } from './sensors.service.js';
import { CreateSensorDto } from './dto/create-sensor.dto.js';
import { UpdateSensorDto } from './dto/update-sensor.dto.js';

@Controller('sensors')
export class SensorsController {
  constructor(private readonly sensorsService: SensorsService) {}

  @Post()
  create(@Body( new ValidationPipe() ) createSensorDto: CreateSensorDto) {
    return this.sensorsService.create(createSensorDto);
  }

  @Get()
  findAll() {
    return this.sensorsService.findAll();
  }

  @Get(':id_sensor')
  findOne(@Param('id_sensor') id_sensor: number) {
    return this.sensorsService.findOne(id_sensor);
  }

  @Patch(':id_sensor')
  update(@Param('id_sensord') id_sensor: number, @Body( new ValidationPipe() ) updateSensorDto: UpdateSensorDto) {
    return this.sensorsService.update(id_sensor, updateSensorDto);
  }

  @Delete(':id_sensor')
  remove(@Param('id_sensor') id_sensor: number) {
    return this.sensorsService.remove(id_sensor);
  }
}
