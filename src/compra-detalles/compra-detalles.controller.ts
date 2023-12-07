import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CompraDetallesService } from './compra-detalles.service';
import { CreateCompraDetalleDto } from './dto/create-compra-detalle.dto';
import { UpdateCompraDetalleDto } from './dto/update-compra-detalle.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Compra Detalles')
@Controller('compra-detalles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
export class CompraDetallesController {
  constructor(private readonly compraDetallesService: CompraDetallesService) {}

  @Post()
  create(@Body() createCompraDetalleDto: CreateCompraDetalleDto) {
    return this.compraDetallesService.create(createCompraDetalleDto);
  }

  @Get()
  findAll() {
    return this.compraDetallesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraDetallesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompraDetalleDto: UpdateCompraDetalleDto) {
    return this.compraDetallesService.update(+id, updateCompraDetalleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compraDetallesService.remove(+id);
  }
}
