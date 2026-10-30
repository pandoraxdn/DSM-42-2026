import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Query, Req} from '@nestjs/common';
import { SensorsService } from './sensors.service.js';
import { CreateSensorDto } from './dto/create-sensor.dto.js';
import { UpdateSensorDto } from './dto/update-sensor.dto.js';
import { Sensor } from './entities/sensor.entity.js';
import * as express from 'express';

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

  @Get('consultas/total')
  total() {
    return this.sensorsService.total();
  }

  @Get('consultas/paginado')
  paginado( @Query('pagina') pagina: number = 1, @Query('limite') limite: number = 50, @Req() request: express.Request) {
    const baseUrl = `${request.protocol}://${request.host}${request.baseUrl}/sensors/consultas/paginado`;
    return this.sensorsService.paginado( pagina, limite, baseUrl );
  }

  @Post('consultas/insertar-masivo')
  async interMasivo( @Body() lecturas: Sensor[] ) {
    await this.sensorsService.interMasivo(
      lecturas.map( (l) => ({ ...l, fecha: l.fecha ? new Date(l.fecha) : undefined }) )
    )
    return { datos_ingresados: lecturas.length };
  }
}
