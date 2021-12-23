import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { tagCountOrderByAggregateInput } from './tag-count-order-by-aggregate.input';
import { tagAvgOrderByAggregateInput } from './tag-avg-order-by-aggregate.input';
import { tagMaxOrderByAggregateInput } from './tag-max-order-by-aggregate.input';
import { tagMinOrderByAggregateInput } from './tag-min-order-by-aggregate.input';
import { tagSumOrderByAggregateInput } from './tag-sum-order-by-aggregate.input';

@InputType()
export class tagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    use_count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    is_delete?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => tagCountOrderByAggregateInput, {nullable:true})
    _count?: tagCountOrderByAggregateInput;

    @Field(() => tagAvgOrderByAggregateInput, {nullable:true})
    _avg?: tagAvgOrderByAggregateInput;

    @Field(() => tagMaxOrderByAggregateInput, {nullable:true})
    _max?: tagMaxOrderByAggregateInput;

    @Field(() => tagMinOrderByAggregateInput, {nullable:true})
    _min?: tagMinOrderByAggregateInput;

    @Field(() => tagSumOrderByAggregateInput, {nullable:true})
    _sum?: tagSumOrderByAggregateInput;
}
