import { Compra } from "src/compras/entities/compra.entity";
import { Producto } from "src/productos/entities/producto.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('compra_detalles')
export class CompraDetalle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int', { nullable: false})
    cantidad: number;

    @Column('decimal', { precision: 5, scale: 2, nullable: false})
    precioUnitario: number;

    @Column('decimal', { precision: 5, scale: 2, nullable: false})
    total: number;

    @CreateDateColumn({ name: 'fecha_registro'})
    fechaRegistro: Date;

    @ManyToOne(() => Producto, (producto) => producto.compradetalle)
    @JoinColumn({ name: 'id_Producto', referencedColumnName: 'id'})
    productos: Producto;

    @ManyToOne(() => Compra, (compras) => compras.compras)
    @JoinColumn({ name: 'id_Compra', referencedColumnName: 'id'})
    compras: Compra;
}
