import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProductoDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo nombre no debe ser vacio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(40, {
    message: 'El campo nombre no debe ser mayor a 40 caracteres',
  })
  readonly nombre: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo descripcion no debe ser vacio' })
  @IsString({ message: 'El campo descripcion debe ser de tipo cadena' })
  @MaxLength(200, {
    message: 'El campo descripcion no debe ser mayor a 200 caracteres',
  })
  readonly descripcion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo categoria no debe ser vacio' })
  @IsString({ message: 'El campo categoria debe ser de tipo cadena' })
  @MaxLength(200, {
    message: 'El campo categoria no debe ser mayor a 200 caracteres',
  })
  readonly categoria: string;

  @ApiProperty()
  @IsDefined({ message: 'El campo precio debe ser definido' })
  @IsNumber({}, { message: 'El campo precio debe ser de tipo numérico' })
  readonly precio: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo stock debe ser definido' })
  @IsNumber({}, { message: 'El campo stock debe ser de tipo numérico' })
  readonly stock: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo imagen no debe ser vacío' })
  @IsString({ message: 'El campo imagen debe ser de tipo cadena' })
  @MaxLength(5000, {
    message: 'El campo imagen no debe ser mayor a 5000 caracteres',
  })
  readonly urlImagen: string;
}
