import { Injectable } from '@nestjs/common';
import KeycloakAdminClient from 'keycloak-admin';

@Injectable()
export class TenantManagementService {
  private keycloakAdmin: KeycloakAdminClient;

  constructor() {
    this.keycloakAdmin = new KeycloakAdminClient();
    this.keycloakAdmin.setConfig({
      baseUrl: 'http://localhost:8080/auth',
      realmName: 'master',
    });
  }

  async createRealm(realmName: string) {
    await this.keycloakAdmin.auth({
      username: 'admin',
      password: 'admin',
      grantType: 'password',
      clientId: 'admin-cli',
    });

    await this.keycloakAdmin.realms.create({
      realm: realmName,
      enabled: true,
    });
  }
}
