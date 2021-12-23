---
marp: false
---

# 小分享

---

### Prisma

---

- 定义
  - datasource：PG/MYSQL/SQLITE
  - generator：插件化
  - model：模型定义

---

- 订正
  - 初始化时需要一次 pull/push，会清 database
  - 生成订正 sql，`npx prisma migrate dev --name nick-need`，会同步至数据库。
  - 如有非必填字段订正成必填字段，会检查数据。

---

prisma db pull
prisma db push
npx prisma migrate dev --name nick-need

- studio & data platform

---

- 生成
  - npx prisma generate
  - 根据定义中的 generator 生成

---

### NestJS

---

- 前置步骤：npx prisma generate 生成 orm client

---

- module
  - controller
  - service
  - dto
  - entities

---

- crud 脚手架：`npx nest g resource`

---

- crud decorator：
  - @Post @Get …
  - @Params @Body @Query
  - @Request @Response

---

- `service` 调用 `prisma client`

---

- `swagger` 配置，`@ApiTags @ApiBearerAuth @ApiOperation`

---

- 全局钩子
  - auth
  - role
  - error
  - response wrapper

---

- `config` 配置
  - `.env` 环境变量做配置
  - `yaml` 自己实现配置

---

### GraphQL

---

- 但还是太复杂了，crud 还是太复杂了

---

                            `Graphql Type`
                                    ↑
                      `数据库` ← `定义模型` → `entity` → `dto` →
                                    ↓
                            `orm client`  →  `service`
                                    ↓
                            `Graphql Query` → `Graphql Mutation`

---

- Scheme / Query / Mutation

---

- 架构优先 / 代码优先
- 代码优先，使用代码定义 Type，由 Prisma Generator 生成

---

- Graphql Type 是面向前端的模型定义，实际上与数据库模型不一定完全匹配
- 与 rest 分层对应的：Type → Service → Resolver → Module
- prisma client 天然支持 graphql，会自动转换成所有可用的 Scheme / Query / Mutation(演示）

---

- graphiql playground 类 swagger，但是是正式环境的能力，所有开放的 graphql 服务都可以生成文档和演示请求。
- [Explorer - GitHub Docs](https://docs.github.com/en/graphql/overview/explorer)
- [graphiql-explorer](https://github.com/OneGraph/graphiql-explorer)
- [Yuce GraphiQL](http://localhost:3000/index.html?url=https://api.github.com/graphql)

---

### thanks
