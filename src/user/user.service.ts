import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository,  } from '@nestjs/typeorm';
import { RolService } from 'src/rol/rol.service';
import { DataSource, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { ResetPasswordDto } from './dto/resetPasswordDto';

@Injectable()
export class UserService {
  constructor(
    private rolServices: RolService,
    @InjectRepository(User) private usersRepository: Repository<User>,
    private readonly dataSource: DataSource
  ) {}

  //Create
  async create(createUserDto: CreateUserDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    
    try {
      const rolFound = await this.rolServices.findOne(createUserDto.rolId);

      if (!rolFound) return new HttpException('ROL_ID_FOUND', HttpStatus.NOT_FOUND);
  
      const newUser = await this.usersRepository.findOne({
        where: {
          email: createUserDto.email,
        },
      });
  
      if (newUser)
        return new HttpException('ERROR_EMAIL_CONFLICT', HttpStatus.CONFLICT);

      const Hash = bcrypt.hashSync(createUserDto.password, 10);

      queryRunner.startTransaction();
      const result = this.usersRepository.create({
        ...createUserDto,
        password: Hash,
        status: 1,
      });
  
  
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1003309608.
      const userNew = await queryRunner.manager.save(result);
      await queryRunner.commitTransaction();

      return userNew;
    } catch (error) {

      queryRunner.rollbackTransaction();
      return new HttpException(error, HttpStatus.NOT_FOUND);
    }
   
  }

  //*-----------//GetAll------------------*/
  findAll() {
    return this.usersRepository.find({
      select: { password: false },
      relations: ['rol'],
    });
  }

  //*-----------//Get Id------------------*/
  findOne(id: number) {
    return this.usersRepository.findOne({
      select: {
        password: false,
      },
      where: {
        Id: id,
      },
      relations: ['rol'],
    });
  }

  //*-----------//Get Id------------------*/
  getUser(email: string) {
    return this.usersRepository.findOne({
      select: {
        password: false,
      },
      where: {
        email: email,
      },
    });
  }

  //*-----------Update------------------*/
  async update(Id: number, updateUserDto: UpdateUserDto) {
    const validUser = await this.usersRepository.findOne({
      where: {
        Id,
      },
    });

    if (!validUser) return new HttpException('USER_FOUND', HttpStatus.FOUND);

    const Hash =
      updateUserDto.password != undefined
        ? bcrypt.hashSync(updateUserDto.password, 10)
        : validUser.password;
    const result = await this.usersRepository.update(Id, {
      ...updateUserDto,
      password: Hash,
    });

    if (result.affected == 1)
      return this.usersRepository.findOne({ where: { Id } });
    new HttpException('USER_NOT_UPDATE', HttpStatus.EXPECTATION_FAILED);
  }

  //*-----------/Delete------------------*/
  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto):Promise<User> {
    const { Id, NewPassword, Password } = resetPasswordDto;
    console.log('entro 1')
    try {
      let user = await this.findOne(Id);
      console.log('entro 2')
      const Hash = bcrypt.hashSync(Password, 10);
      if (user || user.password == Hash) {
        console.log('entro')
        const newHash = bcrypt.hashSync(NewPassword, 10);
        this.usersRepository.update(Id, { password: newHash });
        return await this.findOne(Id);
      }

      throw new HttpException('USER_NOT_UPDATE', HttpStatus.EXPECTATION_FAILED);
    } catch (error) {
      throw new HttpException('USER_NOT_UPDATE', HttpStatus.EXPECTATION_FAILED, {
        cause:error
      });
    }
  }
}
