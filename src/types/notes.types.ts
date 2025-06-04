import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: string;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;
}
