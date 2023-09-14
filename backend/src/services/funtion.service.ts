import { FuntionRepository } from '../repository'
import { FunctionDTO } from '../dto'
import { AppDataSource, Calculate } from '../utilities'
import { FuntionEntity } from '../entities'
import Big from 'big.js'

export class FuntionService {

    constructor(private readonly functionRepository: FuntionRepository) {

    }

    async addHistory(functionParam: FunctionDTO): Promise<string> {
        const result = Calculate(new Big(functionParam.number1), new Big(functionParam.number2), functionParam.operator)

        const functionEntity = AppDataSource.manager.create(FuntionEntity, functionParam)
        functionEntity.result = result
        await this.functionRepository.addHistory(functionEntity);
        return result
    }

    async getHistory(): Promise<FuntionEntity[]> {
        return await this.functionRepository.getHistory()
    }

}