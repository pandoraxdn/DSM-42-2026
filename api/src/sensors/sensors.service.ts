import { Injectable } from '@nestjs/common';
import { CreateSensorDto } from './dto/create-sensor.dto.js';
import { UpdateSensorDto } from './dto/update-sensor.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from './entities/sensor.entity.js';

@Injectable()
export class SensorsService {
  constructor(
    @InjectRepository( Sensor, "mariadb-connection")
    private sensorRepository: Repository<Sensor>
  ){}

  async create(data: CreateSensorDto) {
    const register = this.sensorRepository.create(data);
    return await this.sensorRepository.save(register);
  }

  async findAll() {
    return await this.sensorRepository.find();
  }

  async findOne(id_sensor: number) {
    return await this.sensorRepository.findBy({ id_sensor });
  }

  async update(id_sensor: number, data: UpdateSensorDto) {
    return await this.sensorRepository.update(id_sensor, data);
  }

  async remove(id_sensor: number) {
    return await this.sensorRepository.delete(id_sensor);
  }

  async paginado ( pagina: number = 1, limite: number = 50, baseUrl: string ){
    /*
      (pagina 2)
      SELECT * FROM sensor
      ORDER BY id_sensor DESC
      LIMIT 50 OFFSET 50;
    * */
    const data = await this.sensorRepository.find({
      order: { id_sensor: 'DESC' },
      skip: (pagina - 1) * limite,
      take: limite
    });

    const next = `${baseUrl}?pagina=${pagina + 1}&limite=${limite}`;

    const prev = `${baseUrl}?pagina=${ (pagina - 1 > 0)  ? pagina -1 : 0}&limite=${limite}`;

    const author = 'Author: Pandora XDN'
    
    return {
      author,
      next,
      prev,
      data
    }
  }

  async interMasivo( lecturas: Partial<Sensor>[], tomanolote = 1000 ){
    for ( let i = 0; i < lecturas.length; i += tomanolote ){
      await this.sensorRepository
        .createQueryBuilder()
        .insert()
        .into(Sensor)
        .values( lecturas.slice( i, i + tomanolote ) )
        .execute();
    }
  }

  total(){
    // SELECT COUNT(*) FROM sensor;
    return this.sensorRepository.count();
  }

}
