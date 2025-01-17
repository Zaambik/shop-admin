import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UsePipes,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { GetUser, GetAdmin } from '../auth/decorator/user.decorator';
import { Auth } from '../auth/guard/jwt.guard';
import { ProductsDto } from './products.dto';
import { ProductsService } from './products.service';

// TODO @Auth()
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/all')
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':_id')
  byId(@Param('_id') _id: Types.ObjectId) {
    return this.productsService.getById(_id);
  }

  @Post('/add')
  addOne(@Body() dto: ProductsDto) {
    return this.productsService.addOne(dto);
  }

  @Put('/edit/:_id')
  @HttpCode(200)
  edit(@Param('_id') _id: Types.ObjectId, @Body() dto: ProductsDto) {
    return this.productsService.editOne(_id, dto);
  }

  @Put('/delete/:_id')
  delete(@Param('_id') _id: Types.ObjectId) {
    return this.productsService.deleteOne(_id);
  }

  @Put('/minus/:_id')
  minus(@Param('_id') _id: Types.ObjectId) {
    return this.productsService.minus(_id);
  }

  @Put('/plus/:_id')
  plus(@Param('_id') _id: Types.ObjectId) {
    return this.productsService.plus(_id);
  }
}
