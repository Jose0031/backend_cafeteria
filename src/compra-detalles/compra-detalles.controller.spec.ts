import { Test, TestingModule } from '@nestjs/testing';
import { CompraDetallesController } from './compra-detalles.controller';
import { CompraDetallesService } from './compra-detalles.service';

describe('CompraDetallesController', () => {
  let controller: CompraDetallesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompraDetallesController],
      providers: [CompraDetallesService],
    }).compile();

    controller = module.get<CompraDetallesController>(CompraDetallesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
