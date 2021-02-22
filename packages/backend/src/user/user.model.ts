import { Column, Entity, ObjectIdColumn } from 'typeorm';

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @ObjectIdColumn()
  _id: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  password: string;
}
