import { DataSource } from 'typeorm'
import { join } from 'path'
import { FuntionEntity } from '../../entities'

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: join(process.cwd(), 'backend', 'src', 'datasource', 'calculadora.db'),
    synchronize: true,
    logging: true,
    entities: [FuntionEntity],
    subscribers: [],
    migrations: [],
})