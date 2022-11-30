import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleInfoDto } from './dto/vehicle.info.dto';
import { vehicleManagement } from './management.entity';

@Injectable()
export class ManagementService {
  task: any;

  constructor(
    @InjectRepository(vehicleManagement)
    private taskRepository: Repository<vehicleManagement>,
  ) {}

  async createTasks(
    createVehicheDto: CreateVehicleInfoDto,
  ): Promise<vehicleManagement> {
    const { type, price, name, productionDate } = createVehicheDto;

    const task = await this.taskRepository.create({
      type,
      price,
      name,
      productionDate,
    });

    await this.taskRepository.save(task);
    return task;
  }
}
