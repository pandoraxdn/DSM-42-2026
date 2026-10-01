import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity.js';
import { SensorsModule } from './sensors/sensors.module.js';
import { Sensor } from './sensors/entities/sensor.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'pass',
      username: 'najimi',
      database: 'dsm42',
      entities: [ Sensor ],
      synchronize: true,
      autoLoadEntities: true
    }),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      password: 'pass',
      username: 'najimi',
      database: 'DSM42',
      entities: [ User ],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule,
    SensorsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




