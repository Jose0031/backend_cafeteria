import { Test, TestingModule } from '@nestjs/testing';
import { CompraDetallesService } from './compra-detalles.service';

describe('CompraDetallesService', () => {
  let service: CompraDetallesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompraDetallesService],
    }).compile();

    service = module.get<CompraDetallesService>(CompraDetallesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
