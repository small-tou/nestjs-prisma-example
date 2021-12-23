import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
@ObjectType()
export class SelectTagDto {
  @Field()
  @ApiProperty()
  uid: string;
  @Field()
  @ApiProperty({
    description: 'The name of the tag',
    default: '标签名',
  })
  name: string;
  @Field()
  @ApiProperty({
    description: 'The useCount of the tag',
    default: '标签使用次数',
  })
  use_count: number;
  @Field()
  @ApiProperty()
  created_at: Date;
  @Field()
  @ApiProperty()
  updated_at: Date;
}
