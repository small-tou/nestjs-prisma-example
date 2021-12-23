import { Injectable } from '@nestjs/common';
import { Pager, pageWrapper } from '../helpers/pager.helper';
import { PrismaService } from '../prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagsService {
  constructor(private prisma: PrismaService) {}
  async create(createTagDto: CreateTagDto) {
    return this.prisma.tag.create({ data: createTagDto });
  }

  findAll(pager: Pager, isAdmin = false) {
    const condition: any = {
      is_delete: false,
    };
    if (isAdmin) {
      condition.user_role = 1;
    }
    return pageWrapper(
      () => {
        return this.prisma.tag.findMany({
          skip: (pager.pageIndex - 1) * pager.pageSize,
          take: pager.pageSize,
          where: condition,
          orderBy: [{ use_count: 'desc' }],
          select: {
            is_delete: false,
            id: false,
            uid: true,
            name: true,
            use_count: true,
            created_at: true,
            updated_at: true,
          },
        });
      },
      () =>
        this.prisma.tag.count({
          where: condition,
        }),
      pager,
    );
  }

  findOne(uid: string) {
    return this.prisma.tag.findUnique({
      where: { uid: uid },
    });
  }

  findOneNoWhere() {
    return this.prisma.tag.findFirst({});
  }

  update(uid: string, updateTagDto: UpdateTagDto) {
    return this.prisma.tag.update({
      where: { uid: uid },
      data: updateTagDto,
    });
  }

  remove(id: number) {
    return this.prisma.tag.delete({ where: { id: id } });
  }
}
