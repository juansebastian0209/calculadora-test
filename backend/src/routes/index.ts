import express, { Application } from 'express'
import { FuntionService } from '../services'
import { FuntionRepository } from '../repository'

import { validateDto } from '../middlewares/validationDto'
import { FunctionController } from '../controllers'
import { FunctionDTO } from '../dto/function.dto'

export function mainRoutes(application: Application): void {
    const router = express.Router()


    const functionRepository = new FuntionRepository()
    const functionService = new FuntionService(functionRepository)
    const functionController = new FunctionController(functionService)

    router.post('/functions', validateDto(FunctionDTO), functionController.save)
    router.get('/functions', functionController.getList)
    router.get('/history', functionController.history)

    application.use('/v1', router)
}