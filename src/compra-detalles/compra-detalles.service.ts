import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateCompraDetalleDto } from './dto/create-compra-detalle.dto';
import { UpdateCompraDetalleDto } from './dto/update-compra-detalle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CompraDetalle } from './entities/compra-detalle.entity';
import { Repository } from 'typeorm';
import { Producto } from 'src/productos/entities/producto.entity';
import { Compra } from 'src/compras/entities/compra.entity';

@Injectable()
export class CompraDetallesService {
  constructor(
    @InjectRepository(CompraDetalle)
    private compradetalleRepository: Repository<CompraDetalle>,
  ) {}

  async create(createCompraDetalleDto: CreateCompraDetalleDto): Promise<CompraDetalle> {
    const exitecompraDetalle = await this.compradetalleRepository.findOneBy({
      cantidad: createCompraDetalleDto.cantidad,
      precioUnitario: createCompraDetalleDto.precioUnitario,
      total: createCompraDetalleDto.total,
      productos: {id: createCompraDetalleDto.idProducto },
      compras: {id: createCompraDetalleDto.idCompra },
    });

    if(exitecompraDetalle){
      throw new ConflictException('La compre detalle ya existe');
    }
    return this.compradetalleRepository.save({
      cantidad: createCompraDetalleDto.cantidad,
      precioUnitario: createCompraDetalleDto.precioUnitario,
      total: createCompraDetalleDto.total,
      productos: {id: createCompraDetalleDto.idProducto },
      compras: {id: createCompraDetalleDto.idCompra },
    });
  }

  async findAll(): Promise<CompraDetalle[]> {
    return this.compradetalleRepository.find({ relations: ['productos', 'compras']});
  }

  async findOne(id: number): Promise<CompraDetalle> {
    const compradetalle = await this.compradetalleRepository.findOne({
      where: { id },
      relations: ['productos', 'compras'],
    });
    if (!compradetalle) {
      throw new NotFoundException(`No existe la compra detalle ${id}`);
    }
    return compradetalle;
  }

  async update(id: number, updateCompraDetalleDto: UpdateCompraDetalleDto): Promise<CompraDetalle> {
    const compradetalle = await this.compradetalleRepository.findOneBy({ id });
    if (!compradetalle) {
      throw new NotFoundException(`No existe el producto ${id}`);
    }
    const compradetalleUpdate = Object.assign(compradetalle, updateCompraDetalleDto);
    compradetalleUpdate.productos = { id: updateCompraDetalleDto.idProducto } as Producto;
    compradetalleUpdate.compras = { id: updateCompraDetalleDto.idCompra } as Compra;
    return this.compradetalleRepository.save(compradetalleUpdate);
  }

  async remove(id: number) {
    const compradetalle = await this.compradetalleRepository.findOneBy({ id});
    if(!compradetalle){
      throw new NotFoundException(`No existe la compra detalle ${id}`);
    }
    return this.compradetalleRepository.delete(id);
  }
}
