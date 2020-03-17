import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name : string;

    @Column()
    idPro : number;

    @Column()
    qty : number;

    @Column()
    price : number;

}