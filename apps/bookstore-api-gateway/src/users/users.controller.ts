import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
        console.log('UsersController From The Gateway');
    }

    @Get()
    async getUsers() {
        return this.userService.findAll();
    }
}
