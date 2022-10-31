import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Admin } from '../../admin/entities/admin.entity';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
  })
  name: string;

  @Column({
    type: 'float',
  })
  price: number;

  @Column({
    type: 'text',
  })
  currency: string;

  @Column({
    type: 'text',
  })
  status: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  purchased_by?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  purchased_at?: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  for_sale_at?: string;

  @Column({
    type: 'text',
  })
  created_ad?: string;

  @ManyToOne(() => Admin, (Admin) => Admin.products, {
    onDelete: 'CASCADE',
  })
  admin: Admin;

  @BeforeInsert()
  checkFields() {
    this.name = this.name.replace(' ', '_').toLowerCase();
    this.status = this.status.replace(' ', '_').toLowerCase();
  }
}
