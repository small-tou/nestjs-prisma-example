import {
  Inject,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { GraphQLSchema } from 'graphql';
import { SchemaProvider } from './schema.service';
import { graphqlHTTP } from 'express-graphql';

@Module({
  providers: [...SchemaProvider],
  imports: [],
})
export class GraphApiModule implements NestModule {
  constructor(
    @Inject('SchemaProvider') private readonly schema: GraphQLSchema,
  ) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        graphqlHTTP((req) => ({
          rootValue: req,
          schema: this.schema,
          graphiql: true,
          pretty: true,
        })),
      )
      .forRoutes({
        path: '/graphql-api',
        method: RequestMethod.ALL,
      });
  }
}
