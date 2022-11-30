import { Module } from '@nestjs/common';
import { ManagementModule } from './management/management.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { vehicleManagement } from './management/management.entity';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { managementRepository } from './management/management.repository';

@Module({
  imports: [
    ManagementModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task.management',
      autoLoadEntities: true,
      synchronize: true,
      entities: [vehicleManagement],
    }),
    TypeOrmExModule.forCustomRepository([managementRepository]),
  ],
})
export class AppModule {}
