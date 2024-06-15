import { Controller, Post, Body } from '@nestjs/common';
import { UserManagementService } from './user-management.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserManagementController {
  constructor(private readonly userManagementService: UserManagementService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userManagementService.create(createUserDto);
  }
}
