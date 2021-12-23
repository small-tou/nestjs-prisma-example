import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class tagCreateInput {

    @Field(() => String, {nullable:true})
    uid?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    use_count?: number;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => Boolean, {nullable:true})
    is_delete?: boolean;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
