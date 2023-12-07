import { PartialType } from '@nestjs/swagger';
import { CreateCompraDetalleDto } from './create-compra-detalle.dto';

export class UpdateCompraDetalleDto extends PartialType(CreateCompraDetalleDto) {}
