import { Body, Controller, Get, Post, Put, Delete, Param, HttpCode, HttpStatus, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { UserBodyDto } from './user_body.dto';
import { UserEntity } from './user.entity';


@UsePipes(ValidationPipe)
@Controller('api')
export class TelecomController
{
   constructor(
      @InjectRepository(UserEntity)
      private readonly _userRepository: Repository<UserEntity>,
   ) {}


   @Get('users')
   public async getUsersList(): Promise<{users: UserEntity[]}>
   {
      const users = await this._userRepository.find();
      return { users };
   }

   @Get('users/:userId')
   public async getUser(@Param('userId') userId: string): Promise<UserEntity>
   {
      const userIdNum = Number(userId);
      if (!userIdNum) {
         throw new NotFoundException();
      }

      const user = await this._userRepository.findOne({ where: {id: userIdNum}});
      if (user === undefined) {
         throw new NotFoundException();
      }

      return user;
   }

   @Post('users')
   @HttpCode(HttpStatus.OK)
   public async register(@Body() body: UserBodyDto): Promise<{id: number}>
   {
      const userEntity = this._userRepository.create(body);
      const savedUser = await this._userRepository.save(userEntity);
      return {id: savedUser.id};
   }

   @Put('users/:userId')
   public async updateUser(@Param('userId') userId: string, @Body() body: UserBodyDto): Promise<{success: boolean}>
   {
      const userIdNum = Number(userId);
      if (!userIdNum) {
         throw new NotFoundException();
      }

      const updateObject: DeepPartial<UserEntity> = {};
      Object.keys(body).forEach((key) => {
         // @ts-ignore
         updateObject[key] = body[key] || null;
      });

      const result = await this._userRepository.update({id: userIdNum}, updateObject);

      if (result.affected !== 1) {
         throw new NotFoundException();
      }

      return {success: true};
   }

   @Delete('users/:userId')
   public async deleteUser(@Param('userId') userId: string): Promise<{success: boolean}>
   {
      const userIdNum = Number(userId);
      if (!userIdNum) {
         throw new NotFoundException();
      }

      const result = await this._userRepository.delete({id: userIdNum});

      if (result.affected !== 1) {
         throw new NotFoundException();
      }

      return {success: true};
   }
}
