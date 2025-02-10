import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './enduser.dto';

@Injectable()
export class EnduserService {
  constructor() {
    console.log('EnduserService Called :>> ')
  }
  private users: CreateUserDto[] = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', age: 28 },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', age: 32 },
    { firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', age: 25 },
    { firstName: 'Bob', lastName: 'Brown', email: 'bob.brown@example.com', age: 40 },
    { firstName: 'Charlie', lastName: 'Davis', email: 'charlie.davis@example.com', age: 22 },
  ];
  async findAll() {
    return this.users;
  }
}
