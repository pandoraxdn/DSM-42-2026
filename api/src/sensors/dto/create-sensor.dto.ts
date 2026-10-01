import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";
export class CreateSensorDto {
  @IsDateString()
  @IsNotEmpty()
  fecha?: Date;

  @IsNumber()
  @IsNotEmpty()
  distancia_cm: number;

  @IsNumber()
  @IsNotEmpty()
  distancia_inch: number;
}
