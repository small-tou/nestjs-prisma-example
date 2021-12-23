import {
  applyDecorators,
  createParamDecorator,
  ExecutionContext,
  Type,
} from '@nestjs/common';
import { ApiOkResponse, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { PrismaPromise } from '@prisma/client';

export class Pager {
  @ApiProperty()
  pageIndex: number;
  @ApiProperty()
  pageSize: number;
}

export class PagedDto<T> {
  pageIndex: number;
  pageSize: number;
  data?: T[];
  totalCount?: number;
}

/**
 * 对分页查询参数进行转换的注解
 */
export const Pageable = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Pager => {
    const request = ctx.switchToHttp().getRequest();
    const pageIndex = parseInt(request.query.pageIndex, 10) || 1;
    const pageSize = parseInt(request.query.pageSize, 10) || 10;
    return {
      pageIndex,
      pageSize,
    };
  },
);

/**
 * 生成分页数据
 * @param queryPromise
 * @param countAllPromise
 * @param page
 * @returns
 */
export async function pageWrapper<T>(
  queryPromise: () => PrismaPromise<T[]>,
  countAllPromise: () => PrismaPromise<number>,
  page: Pager,
): Promise<PagedDto<T>> {
  return {
    data: await queryPromise(),
    pageSize: page.pageSize,
    pageIndex: page.pageIndex,
    totalCount: await countAllPromise(),
  };
}

/**
 * 分页响应装饰器
 * @param model
 * @returns
 */
export const ApiPagedResponse = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      //   type: Type<PagedDto,
      schema: {
        properties: {
          data: {
            type: 'array',
            items: { $ref: getSchemaPath(model) },
          },
          pageIndex: { type: 'integer' },
          pageSize: { type: 'integer' },
          totalCount: { type: 'integer' },
        },
      },
    }),
  );
};
