import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import fetch from 'node-fetch';
import { ConfigService } from '@nestjs/config';
import { GqlExecutionContext } from '@nestjs/graphql';
import { NestConfig } from '../config';
type ICloudUserInfo = {
  id: string;
  nickName: string;
  status: number;
  userName: string;
  userRole: number;
  userRoleName: string;
  userType: number;
  userTypeName: string;
};
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const gqlReq = ctx.getContext().req;
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    // 从 header 或者 query 里获取token，query里的token方便调试
    let token = '';
    if (gqlReq) {
      token = `${gqlReq.headers['authorization']}`;
    } else {
      token = request?.get('x-authorization') || request?.get('authorization');
    }
    // if (!token) {
    //   return false;
    // } else {
    // 此处省略校验逻辑，可以走接口也可以自己实现
    const ok = true;
    if (ok) {
      // 如果验证通过，将用户信息存入全局

      return true;
    } else {
      return false;
    }
    // }
  }
}
