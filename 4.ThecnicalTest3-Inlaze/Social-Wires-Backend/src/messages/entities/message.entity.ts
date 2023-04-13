import { User } from "../../auth/entities/auth.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Messages {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    msg: string;

    @CreateDateColumn()
    createdAt?: Date;

    //User
    @ManyToOne(
        () => User,
        user => user.messages,
        { eager: true }
    )
    user: User;
}
