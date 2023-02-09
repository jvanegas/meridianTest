import * as dotenv from 'dotenv'
dotenv.config()

const environment = process.env.NODE_ENV ?? 'DEVELOPMENT'
let config

switch (environment) {
  case 'TEST':
    config = {
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'postgres',
      database: `${process.env.DB_NAME}_test` ?? 'test',
      port: process.env.DB_PORT ?? 5432,
      host: process.env.DB_HOST ?? '127.0.0.1',
      dialect: process.env.DB_VENDOR ?? 'postgres',
      appPort: process.env.APP_PORT ?? 3000,
      logger: false,
    }
    break
  case 'DEVELOPMENT':
    config = {
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'postgres',
      database: process.env.DB_NAME ?? 'postgres',
      port: process.env.DB_PORT ?? 5432,
      host: process.env.DB_HOST ?? '127.0.0.1',
      dialect: process.env.DB_VENDOR ?? 'postgres',
      appPort: process.env.APP_PORT ?? 3000,
      logger: {
        level: 'info',
        transport: {
          target: 'pino-pretty',
        },
      },
    }
    break
}

export default config
