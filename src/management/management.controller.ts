import { Body, Controller, Post } from '@nestjs/common';
import { CreateVehicleInfoDto } from './dto/vehicle.info.dto';
import { vehicleManagement } from './management.entity';
import { ManagementService } from './management.service';

@Controller('management')
export class managementController {
  constructor(private managementService: ManagementService) {}

  @Post()
  createTask(
    @Body() createVehicleDto: CreateVehicleInfoDto,
  ): Promise<vehicleManagement> {
    return this.managementService.createTasks(createVehicleDto);
  }
}
