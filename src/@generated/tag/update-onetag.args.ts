import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagUpdateInput } from './tag-update.input';
import { tagWhereUniqueInput } from './tag-where-unique.input';

@ArgsType()
export class UpdateOnetagArgs {

    @Field(() => tagUpdateInput, {nullable:false})
    data!: tagUpdateInput;

    @Field(() => tagWhereUniqueInput, {nullable:false})
    where!: tagWhereUniqueInput;
}
