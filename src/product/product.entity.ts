import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idPro : number;

    @Column()
    name : string;

    @Column()
    image : string;

    @Column()
    price : number;

    @Column()
    meterial : string;

    @Column()
    fabric : string;

    @Column()
    real : string;

    @Column()
    proStatic : number;
}
