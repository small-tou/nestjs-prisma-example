import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { TagsModule } from './tags/tags.module';
import { ConfigModule } from '@nestjs/config';
import { TagsGqlModule } from './tags-gql/tags-gql.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLError } from 'graphql';
import { ENodeEnv, NestConfig } from './config';
import { GraphApiModule } from './graphql-proxy/graphql-api.module';

const isProduction = NestConfig.nodeEnv === ENodeEnv.production;

const imports = [
  TagsModule,
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  TagsGqlModule,
  GraphApiModule,
  GraphQLModule.forRoot({
    // include: [],
    installSubscriptionHandlers: true,
    debug: true,
    playground: true,
    autoSchemaFile: 'scheme.gen.gql',
    formatError: (error: GraphQLError) => {
      return {
        message: error.message,
        success: false,
        status: error.extensions?.code,
      };
    },
    context: ({ req, res }) => ({ req, res }),
  }),
];
if (!isProduction) {
  // 静态资源托管的是 graphql view
  // 线上环境不支持静态资源托管，主要是断绝 graphql view
  imports.push(
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'static'),
      renderPath: '/static',
    }),
  );
}
@Module({
  imports,
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
