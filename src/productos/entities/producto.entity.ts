import { CompraDetalle } from 'src/compra-detalles/entities/compra-detalle.entity';
import { Promocion } from 'src/promociones/entities/promocion.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  descripcion: string;

  @Column({ type: 'varchar', length: 200, nullable: false })
  categoria: string;

  @Column('decimal', { precision: 5, scale: 2, nullable: false })
  precio: number;

  @Column({ type: 'int', nullable: false })
  stock: number;

  @Column({ name: 'url_imagen', length: 5000 })
  urlImagen: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @OneToMany(() => CompraDetalle, (compradetalle) => compradetalle.productos)
  compradetalle: CompraDetalle[];

  @OneToMany(() => Promocion, (promocion) => promocion.productos)
  promocion: Promocion[];
}
