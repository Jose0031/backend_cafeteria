import { Compra } from 'src/compras/entities/compra.entity';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Comentario } from 'src/comentarios/entities/comentario.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  usuario: string;

  @Column({ type: 'varchar', length: 100})
  clave: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @Column({length: 20})
  rol: string

  @CreateDateColumn({name: 'fecha_creacion'})
  fechaCreacion: Date

  @UpdateDateColumn({name: 'fecha_modicficacion'})
  fechaModificacion: Date

  @OneToMany(() => Compra, (compra) => compra.usuario)
  @JoinColumn({ name: 'id_compra', referencedColumnName: 'id' })
  compras: Compra[];

  @OneToOne(() => Cliente)
  @JoinColumn({ name: 'id_cliente', referencedColumnName: 'id' })
  cliente: Cliente;

  @OneToMany(() => Comentario, (comentario) => comentario.usuario)
  @JoinColumn({ name: 'id_cometario', referencedColumnName: 'id' })
  comentarios: Comentario[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.clave = await bcrypt.hash(this.clave, salt);
  }

  async validatePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.clave);
  }
}
