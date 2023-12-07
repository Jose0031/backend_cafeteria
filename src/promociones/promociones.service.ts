import { Injectable } from '@nestjs/common';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';

@Injectable()
export class PromocionesService {
  create(createPromocionDto: CreatePromocionDto) {
    return 'This action adds a new promocione';
  }

  findAll() {
    return `This action returns all promociones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} promocione`;
  }

  update(id: number, updatePromocionDto: UpdatePromocionDto) {
    return `This action updates a #${id} promocione`;
  }

  remove(id: number) {
    return `This action removes a #${id} promocione`;
  }
}
