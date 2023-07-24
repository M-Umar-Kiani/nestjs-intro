import { Module } from '@nestjs/common';
import { Feature2 } from './feature2.module';
import { Feature1 } from './feature1.module';

@Module({
  imports: [Feature1,Feature2],
  controllers: [],
  providers: [],
})
export class OrderModule {
  constructor(){
    console.log("Order Module")
  }
}