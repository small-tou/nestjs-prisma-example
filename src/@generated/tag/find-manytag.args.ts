import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagWhereInput } from './tag-where.input';
import { tagOrderByWithRelationInput } from './tag-order-by-with-relation.input';
import { tagWhereUniqueInput } from './tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TagScalarFieldEnum } from '../prisma/tag-scalar-field.enum';

@ArgsType()
export class FindManytagArgs {

    @Field(() => tagWhereInput, {nullable:true})
    where?: tagWhereInput;

    @Field(() => [tagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<tagOrderByWithRelationInput>;

    @Field(() => tagWhereUniqueInput, {nullable:true})
    cursor?: tagWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TagScalarFieldEnum>;
}
