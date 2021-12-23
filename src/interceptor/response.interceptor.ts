import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Response } from 'express';
import { GqlExecutionContext } from '@nestjs/graphql';
@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response = context.switchToHttp().getResponse<Response>();
    const ctx = GqlExecutionContext.create(context);
    const graphqlRequest = ctx.getContext().req;
    const restfulRequest = context.switchToHttp().getRequest();

    if (restfulRequest) {
      return next.handle().pipe(
        map((data) => {
          return {
            data,
            success: true,
            message: '请求成功',
            statusCode: response.statusCode,
          };
        }),
      );
    } else if (graphqlRequest) {
      return next.handle().pipe(tap());
    }
  }
}
