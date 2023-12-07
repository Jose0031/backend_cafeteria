import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNumber } from "class-validator";

export class CreateCompraDetalleDto {
    @ApiProperty()
    @IsDefined({ message: 'El campo cantidad debe ser definido' })
    @IsNumber({}, { message: 'El campo cantidad debe ser de tipo numérico' })
    readonly cantidad: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo precio unitario debe ser definido' })
    @IsNumber({}, { message: 'El campo precio unitario debe ser de tipo numérico' })
    readonly precioUnitario: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo total debe ser definido' })
    @IsNumber({}, { message: 'El campo total debe ser de tipo numérico' })
    readonly total: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idProducto debe ser definido' })
    @IsNumber({}, { message: 'El campo idProducto debe ser de tipo numérico' })
    readonly idProducto: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idCompra debe ser definido' })
    @IsNumber({}, { message: 'El campo idCompra debe ser de tipo numérico' })
    readonly idCompra: number;
}
