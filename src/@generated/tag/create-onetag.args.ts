import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagCreateInput } from './tag-create.input';

@ArgsType()
export class CreateOnetagArgs {

    @Field(() => tagCreateInput, {nullable:false})
    data!: tagCreateInput;
}
