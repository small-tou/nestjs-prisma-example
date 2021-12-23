import { Module } from '@nestjs/common';
import { TagsGqlResolver } from './tags-gql.resolver';
import { PrismaService } from '../prisma.service';
import { TagsGqlService } from './tags-gql.service';

@Module({
  providers: [TagsGqlResolver, TagsGqlService, PrismaService],
})
export class TagsGqlModule {}
