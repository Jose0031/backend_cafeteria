import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no puede estar vacio' })
  @IsString({ message: 'El campo nombre debe ser de tipo texto' })
  @MaxLength(40, {
    message: 'El campo nombre no puede tener mas de 40 carácteres',
  })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo apellidos paterno no puede estar vacio' })
  @IsString({ message: 'El campo apellidos paterno debe ser de tipo texto' })
  @MaxLength(40, {
    message: 'El campo apellidos paterno no puede tener mas de 40 carácteres',
  })
  readonly apellidos: string;


  @ApiProperty()
  @IsNotEmpty({ message: 'El campo dirección no puede estar vacio' })
  @IsString({ message: 'El campo dirección debe ser de tipo texto' })
  @MaxLength(40, {
    message: 'El campo dirección no puede tener mas de 40 carácteres',
  })
  readonly direccion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo celular no puede estar vacio' })
  @IsString({ message: 'El campo celular debe ser de tipo texto' })
  @MaxLength(8, {
    message: 'El campo celular no puede tener mas de 15 carácteres',
  })
  readonly celular: string;

  
}
