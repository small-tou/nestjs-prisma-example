import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
@ObjectType()
export class CreateTagDto implements Prisma.tagCreateInput {
  @Field()
  @ApiProperty()
  name: string;
  @Field()
  user_id: string;
  @Field()
  user_role: number;
}
