import { vehicleManagement } from './management.entity';
import { Repository } from 'typeorm';
import { CustomRepository } from '../database/typeorm-ex.decorator';
import { CreateVehicleInfoDto } from '../management/dto/vehicle.info.dto'
import { vehicle_type } from './vehicle-type.enum';

@CustomRepository(vehicleManagement)
export class managementRepository extends Repository<vehicleManagement> {
}