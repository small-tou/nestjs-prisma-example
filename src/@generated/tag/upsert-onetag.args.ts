import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagWhereUniqueInput } from './tag-where-unique.input';
import { tagCreateInput } from './tag-create.input';
import { tagUpdateInput } from './tag-update.input';

@ArgsType()
export class UpsertOnetagArgs {

    @Field(() => tagWhereUniqueInput, {nullable:false})
    where!: tagWhereUniqueInput;

    @Field(() => tagCreateInput, {nullable:false})
    create!: tagCreateInput;

    @Field(() => tagUpdateInput, {nullable:false})
    update!: tagUpdateInput;
}
