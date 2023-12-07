import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber } from 'class-validator';

export class CreateCompraDto {
  @ApiProperty()
  @IsDefined({ message: 'El campo total compra debe ser definido' })
  @IsNumber({}, { message: 'El campo total compra debe ser de tipo numérico' })
  readonly totalCompra: number;

  @ApiProperty()
  @IsDefined({ message: 'El id usuario compra debe ser definido' })
  @IsNumber({}, { message: 'El id usuario compra debe ser de tipo numérico' })
  readonly IdUsuario: number;

}
