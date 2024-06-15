import { Controller, Post, Body } from '@nestjs/common';
import { TenantManagementService } from './tenant-management.service';

@Controller('tenants')
export class TenantManagementController {
  constructor(private readonly tenantManagementService: TenantManagementService) {}

  @Post()
  createTenant(@Body('name') tenantName: string) {
    return this.tenantManagementService.createRealm(tenantName);
  }
}
