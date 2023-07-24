import { Module } from '@nestjs/common';
import { Feature3 } from './feature3.module';

@Module({
  imports: [Feature3],
  controllers: [],
  providers: [],
})
export class ChatModule {
  constructor(){
    console.log("Chat Module")
  }
}