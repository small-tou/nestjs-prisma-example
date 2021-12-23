import * as yaml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';
import * as yargs from 'yargs';
const argv = yargs.argv;

const YAML_CONFIG_FILENAME = (argv.config as string) || './config.yaml';
let yamlConfig: Record<string, any> = {};

try {
  yamlConfig = yaml.load(
    fs.readFileSync(YAML_CONFIG_FILENAME, 'utf8').toString(),
  ) as Record<string, any>;
} catch (e) {
  console.error('加载配置文件出错', e);
}

export enum ENodeEnv {
  development = 'development',
  production = 'production',
  test = 'test',
}

export const NestConfig = {
  databaseUrl: `file:./db.sqlite`, //process.env.NEST_DATABASE_URL,
  authUrl: ``, //process.env.NEST_AUTH_URL,
  nodeEnv: yamlConfig.node_env, //process.env.NODE_ENV as ENodeEnv,
  port: yamlConfig.run_port, //process.env.NEST_PORT,
  proxyApiBaseUrl: ``,
};
//检查必备配置
console.log('NestConfig:', NestConfig);
