import { Module } from '@nestjs/common';
import { CompraDetallesService } from './compra-detalles.service';
import { CompraDetallesController } from './compra-detalles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompraDetalle } from './entities/compra-detalle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CompraDetalle])],
  controllers: [CompraDetallesController],
  providers: [CompraDetallesService],
})
export class CompraDetallesModule {}
