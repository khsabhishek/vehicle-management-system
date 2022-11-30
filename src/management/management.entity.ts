import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { vehicle_type } from './vehicle-type.enum';

@Entity()
export class vehicleManagement {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: vehicle_type,
    default: vehicle_type.BIKE,
  })
  type: vehicle_type;

  @Column()
  price: string;

  @Column()
  name: string;

  @Column()
  productionDate: string;


}
