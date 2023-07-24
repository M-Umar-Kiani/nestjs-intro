import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { OrderModule } from './orders.module';
import { ChatModule } from './chat.module';

@Module({
  imports: [UsersModule, OrderModule, ChatModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor(){
    console.log("Root Module")
  }
}
