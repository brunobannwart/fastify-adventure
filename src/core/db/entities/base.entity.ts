import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export default class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @Column()
  public createdBy?: string;

  @CreateDateColumn({ type: 'timestamptz' })
  public createdAt?: Date;

  @Column()
  public updatedBy?: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  public updatedAt?: Date;

  @Column()
  public deletedBy?: string;

  @DeleteDateColumn({ type: 'timestamptz' })
  public deletedAt?: Date;
}
