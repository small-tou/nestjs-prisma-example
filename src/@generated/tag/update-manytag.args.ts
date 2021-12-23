import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagUpdateManyMutationInput } from './tag-update-many-mutation.input';
import { tagWhereInput } from './tag-where.input';

@ArgsType()
export class UpdateManytagArgs {

    @Field(() => tagUpdateManyMutationInput, {nullable:false})
    data!: tagUpdateManyMutationInput;

    @Field(() => tagWhereInput, {nullable:true})
    where?: tagWhereInput;
}
