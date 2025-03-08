import { Column, Entity, ObjectType, OneToMany } from 'typeorm';

import BaseEntity from '@core/db/entities/base.entity';
import UserCredentialsEntity from '@core/db/entities/user-credentials.entity';

@Entity('user')
export default class UserEntity extends BaseEntity {
  @Column()
  public name?: string;

  @Column()
  public email?: string;

  @Column()
  public document?: string;

  @Column({ type: 'timestamptz' })
  public lastLogin?: Date;

  @OneToMany(
    (): ObjectType<UserCredentialsEntity> => UserCredentialsEntity,
    (credential: UserCredentialsEntity): UserEntity => credential.user
  )
  public credentials?: UserCredentialsEntity[];
}