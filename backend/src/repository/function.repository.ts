import { FuntionEntity } from '../entities'
import { AppDataSource } from '../utilities'

export class FuntionRepository {
    async addHistory(functionParam: FuntionEntity): Promise<void> {
        await AppDataSource.manager.save(functionParam)

    }
    async getHistory(): Promise<FuntionEntity[]> {
        return await AppDataSource.manager.find(FuntionEntity)
    }
}
