import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
    constructor(@Inject('USER_CLIENT') private userClient: ClientProxy) {
        console.log('UsersService From the Gateway');
    }
    // async findAll() {
    //     return 'Mock all ';
    // }
    async findAll() {
        return this.userClient.send('users.findAll', {})
    }
}
