import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class UpdateTagDto implements Prisma.tagCreateInput {
  @ApiProperty()
  name: string;
}
