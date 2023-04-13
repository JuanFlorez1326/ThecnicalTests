import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity({ name: 'admin' })
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
  })
  username: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  email?: string;

  @Column({
    type: 'text',
  })
  password: string;

  @Column({
    type: 'text',
    nullable: true,
    default: 'admin',
  })
  role: string;

  @OneToMany(() => Product, (product) => product.admin, {
    cascade: true,
    eager: true,
  })
  products?: Product[];
}
