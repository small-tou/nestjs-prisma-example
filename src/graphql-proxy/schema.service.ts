import { GraphQLSchema } from 'graphql';
import { createSchema } from '@yu_tou/swagger-to-graphql';
import { callBackend } from './callBackend';

export const SchemaProvider = [
  {
    provide: 'SchemaProvider',
    useFactory: async (): Promise<GraphQLSchema> => {
      const schema = await createSchema({
        swaggerSchema: `./api-docs.json`,
        callBackend,
      })
        .then((schema) => {
          return schema;
        })
        .catch((e) => {
          throw e;
        });
      return schema;
    },
  },
];
