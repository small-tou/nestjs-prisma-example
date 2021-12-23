import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagAvgAggregate } from './tag-avg-aggregate.output';
import { TagSumAggregate } from './tag-sum-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';

@ObjectType()
export class TagGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    use_count!: number;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Boolean, {nullable:false})
    is_delete!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => TagCountAggregate, {nullable:true})
    _count?: TagCountAggregate;

    @Field(() => TagAvgAggregate, {nullable:true})
    _avg?: TagAvgAggregate;

    @Field(() => TagSumAggregate, {nullable:true})
    _sum?: TagSumAggregate;

    @Field(() => TagMinAggregate, {nullable:true})
    _min?: TagMinAggregate;

    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: TagMaxAggregate;
}
