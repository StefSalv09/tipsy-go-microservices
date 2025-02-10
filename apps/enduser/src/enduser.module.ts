import { Module } from '@nestjs/common';
import { EnduserController } from './enduser.controller';
import { EnduserService } from './enduser.service';

@Module({
  imports: [],
  controllers: [EnduserController],
  providers: [EnduserService],
})
export class EnduserModule {
  constructor() {
    console.log('EndUserController Called :>> ')
  }
}
