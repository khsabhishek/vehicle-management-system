import { IsNotEmpty } from 'class-validator';
import { vehicle_type } from '../vehicle-type.enum';



export class CreateVehicleInfoDto {

  @IsNotEmpty({
    type: 'enum',
    enum: vehicle_type,
    default: vehicle_type.BIKE,
  })
  type: vehicle_type;

  @IsNotEmpty()
  price: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  productionDate: string
}
