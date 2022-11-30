import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVehicleInfoDto } from './dto/vehicle.info.dto';
import { vehicleManagement } from './management.entity';

@Injectable()
export class ManagementService {
  task: any;

  constructor(
    @InjectRepository(vehicleManagement)
    private managementRepository: Repository<vehicleManagement>,
  ) {}

  async createVehicleInfo(
    createVehicheDto: CreateVehicleInfoDto,
  ): Promise<vehicleManagement> {
    const { type, price, name, productionDate } = createVehicheDto;

    const task = await this.managementRepository.create({
      type,
      price,
      name,
      productionDate,
    });

    await this.managementRepository.save(task);
    return task;
  }

  async getVehicleInfoByID(id: string): Promise<vehicleManagement> {
    const found = await this.managementRepository.findOne({
      where: { id: id },
    });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }
}
