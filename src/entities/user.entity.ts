import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    email: string;

    @Column({ nullable: false, type: 'varchar', length: 200 })
    name: string;

    @Column({ nullable: false })
    password: string;
}