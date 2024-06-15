import { Module } from '@nestjs/common';
import { TenantManagementService } from './tenant-management.service';
import { TenantManagementController } from './tenant-management.controller';

@Module({
  providers: [TenantManagementService],
  controllers: [TenantManagementController]
})
export class TenantManagementModule {}
