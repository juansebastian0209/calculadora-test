import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, Index } from 'typeorm'



@Index(['number1', 'number2', 'operator'])
@Entity('history')
export class FuntionEntity {
    @Column()
    number1!: string
    @Column()
    number2!: string
    @Column()
    operator!: string
    @Column()
    result!: string
    @CreateDateColumn()
    createdAt!: Date
    @PrimaryGeneratedColumn('uuid')
    id !: string

}