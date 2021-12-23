import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { tagWhereInput } from './tag-where.input';

@ArgsType()
export class DeleteManytagArgs {

    @Field(() => tagWhereInput, {nullable:true})
    where?: tagWhereInput;
}
