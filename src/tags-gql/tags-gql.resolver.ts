import { Resolver, Query, Mutation, Args, Int, Context } from '@nestjs/graphql';

import { TagsGqlService } from './tags-gql.service';
import { FindManytagArgs } from '../@generated/tag/find-manytag.args';
import { FindUniquetagArgs } from '../@generated/tag/find-uniquetag.args';
import { tagWhereInput } from '../@generated/tag/tag-where.input';
import { tagCreateInput } from '../@generated/tag/tag-create.input';
import { tag } from '../@generated/tag/tag.model';

@Resolver(() => tag)
export class TagsGqlResolver {
  constructor(private readonly tagsGqlService: TagsGqlService) {}

  @Mutation(() => tag, { name: 'creatTag' })
  createTag(@Args('tag') createTagsGqlInput: tagCreateInput, @Context() ctx) {
    return this.tagsGqlService.create({
      data: createTagsGqlInput,
    });
  }

  @Query(() => [tag], { name: 'tagsAll' })
  async findAll(@Args() args: FindManytagArgs) {
    const result = await this.tagsGqlService.findMany({ ...args });
    return result;
  }

  @Query(() => tag, { name: 'tagUnique' })
  async findUnique(@Args() args: FindUniquetagArgs) {
    return this.tagsGqlService.findUnique({ ...args });
  }

  @Query(() => Number, { name: 'tagCount' })
  async count(
    @Args({
      name: 'where',
    })
    where: tagWhereInput,
  ) {
    return this.tagsGqlService.count({ where });
  }
}
