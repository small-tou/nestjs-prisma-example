import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TagsGqlService {
  constructor(private prisma: PrismaService) {}

  update = this.prisma.tag.update;
  delete = this.prisma.tag.delete;
  findUnique = this.prisma.tag.findUnique;
  findMany = this.prisma.tag.findMany;
  count = this.prisma.tag.count;
  create = this.prisma.tag.create;
}
