import { Test, TestingModule } from '@nestjs/testing';
import { TagsGqlResolver } from './tags-gql.resolver';
import { TagsGqlService } from './tags-gql.service';

describe('TagsGqlResolver', () => {
  let resolver: TagsGqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagsGqlResolver, TagsGqlService],
    }).compile();

    resolver = module.get<TagsGqlResolver>(TagsGqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
