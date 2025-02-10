import { Controller, Get } from '@nestjs/common';
import { EnduserService } from './enduser.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller("enduser")
export class EnduserController {
  constructor(private readonly enduserService: EnduserService) { }

  @MessagePattern('users.findAll')
  async getUsers() {
    return this.enduserService.findAll();
  }
}
