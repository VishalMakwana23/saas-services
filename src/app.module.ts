import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagementModule } from './user-management/user-management.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { TenantManagementModule } from './tenant-management/tenant-management.module';
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: 'http://localhost:8080/auth',
      realm: 'master',
      clientId: 'nestjs-app',
      secret: 'your_keycloak_client_secret',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'saas_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserManagementModule,
    SubscriptionModule,
    TenantManagementModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ]
})
export class AppModule {}
