import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('compras')
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'total_compra', type: 'double' })
  totalCompra: number;

  @CreateDateColumn({ name: 'fecha_compra' })
  fechaCompra: Date;

  @UpdateDateColumn({name: 'fecha_modicficacion'})
  fechaModificacion: Date

  @ManyToOne(() => Usuario, (usuario) => usuario.compras)
  @JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  usuario: Usuario;
  
  @OneToMany(() => Compra, (compra) => compra.compras)
  compras: Compra[];
}
export { Usuario };
