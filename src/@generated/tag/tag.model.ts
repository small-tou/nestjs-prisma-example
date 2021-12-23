import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class tag {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => String, {nullable:false,defaultValue:''})
    name!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    use_count!: number;

    @Field(() => String, {nullable:false,defaultValue:''})
    user_id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    is_delete!: boolean;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;
}
