import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Response } from 'express';
import { errors } from './errorEnum';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ApolloError } from 'apollo-server-errors';
@Catch()
export class AllExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // const gqlCtx = GqlExecutionContext.create(host);
    // const graphqlRequest = gqlCtx.getContext().req;
    const restfulRequest = host.switchToHttp().getRequest();
    console.log(exception);
    // const message = exception.message
    //   ? exception.message
    //   : `${status >= 500 ? 'Service Error' : 'Client Error'}`;
    const errorResponse: any = {
      success: false,
      data: {},
      message: '',
    };
    if (exception instanceof PrismaClientKnownRequestError) {
      errorResponse.message = errors[(exception as any).code] || errors.other;
    } else if (exception instanceof ForbiddenException) {
      errorResponse.message = '未登录';
      errorResponse.code = 10;
      errorResponse.status = 401;
    } else {
      errorResponse.message = errors.other;
    }
    if (restfulRequest) {
      // 设置返回的状态码、请求头、发送错误信息
      response.status(status);
      response.header('Content-Type', 'application/json; charset=utf-8');
      response.send(errorResponse);
    } else {
      //待完善，graphql 的报错机制
      return new ApolloError(
        errorResponse.message,
        errorResponse.status || exception.getStatus(),
        {},
      );
    }
  }
}
