import { Column, Entity, JoinColumn, ObjectType, OneToOne } from 'typeorm';

import BaseEntity from '@core/db/entities/base.entity';
import UserEntity from '@core/db/entities/user.entity';

import { CredentialsType } from '@shared/enum';

@Entity('user-credentials')
export default class UserCredentialsEntity extends BaseEntity {
  @Column({ type: 'uuid' })
  public userId?: string;

  @Column()
  public token?: string;

  @Column({ type: 'int4' })
  public type: CredentialsType;

  @OneToOne((): ObjectType<UserEntity> => UserEntity)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  public user?: UserEntity;
}