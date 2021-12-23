import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagWhereInput } from './tag-where.input';
import { tagOrderByWithAggregationInput } from './tag-order-by-with-aggregation.input';
import { TagScalarFieldEnum } from '../prisma/tag-scalar-field.enum';
import { tagScalarWhereWithAggregatesInput } from './tag-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class tagGroupByArgs {

    @Field(() => tagWhereInput, {nullable:true})
    where?: tagWhereInput;

    @Field(() => [tagOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<tagOrderByWithAggregationInput>;

    @Field(() => [TagScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TagScalarFieldEnum>;

    @Field(() => tagScalarWhereWithAggregatesInput, {nullable:true})
    having?: tagScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
