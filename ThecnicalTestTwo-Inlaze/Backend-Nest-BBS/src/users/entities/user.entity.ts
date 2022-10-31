import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'user_buyer' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    unique: true,
    nullable: false,
  })
  username: string;

  @Column({
    type: 'text',
    nullable: true,
    unique: true,
  })
  email?: string;

  @Column({
    type: 'text',
    nullable: false,
    select: false,
  })
  password: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  isActive?: boolean;
}
