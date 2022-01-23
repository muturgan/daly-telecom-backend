import { Body, Controller, Get, Post, Put, Delete, Param, HttpCode, HttpStatus, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { UserBodyDto, Success, CreatedUserID, UserList, UserEntity } from './models';
import { ApiOperation, ApiTags, ApiOkResponse, ApiParam } from '@nestjs/swagger';


@UsePipes(ValidationPipe)
@Controller('api')
@ApiTags('Операции над пользователями')
export class TelecomController
{
   constructor(
      @InjectRepository(UserEntity)
      private readonly _userRepository: Repository<UserEntity>,
   ) {}


   @Get('users')
   @ApiOperation({summary: 'Получение списка пользователей'})
   @ApiOkResponse({type: UserList})
   public async getUsersList(): Promise<UserList>
   {
      const users = await this._userRepository.find();
      return { users };
   }

   @Get('users/:userId')
   @ApiParam({name: 'userId', type: 'integer'})
   @ApiOperation({summary: 'Получение данных пользователя по идентификатору'})
   @ApiOkResponse({type: UserEntity})
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
   @ApiOperation({summary: 'Создание нового пользователя'})
   public async register(@Body() body: UserBodyDto): Promise<CreatedUserID>
   {
      const userEntity = this._userRepository.create(body);
      const savedUser = await this._userRepository.save(userEntity);
      return {id: savedUser.id};
   }

   @Put('users/:userId')
   @ApiParam({name: 'userId', type: 'integer'})
   @ApiOperation({summary: 'Обновление данных пользователя'})
   @ApiOkResponse({type: Success})
   public async updateUser(@Param('userId') userId: string, @Body() body: UserBodyDto): Promise<Success>
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
   @ApiParam({name: 'userId', type: 'integer'})
   @ApiOperation({summary: 'Удаление пользователя'})
   @ApiOkResponse({type: Success})
   public async deleteUser(@Param('userId') userId: string): Promise<Success>
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
