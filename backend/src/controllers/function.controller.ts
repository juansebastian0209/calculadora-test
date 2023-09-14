import { StatusCodes } from 'http-status-codes'
import { Request, Response } from "express";

import { FunctionDTO } from "../dto/function.dto";
import { OperatorEnum } from "../enums";
import { FuntionService } from '../services'

export class FunctionController {

    constructor(private readonly functionService: FuntionService) { }

    getList(request: Request, response: Response): Response {
        return response.status(StatusCodes.OK).json({
            operators: Object.values(OperatorEnum)
        })
    }

    save = async (request: Request, response: Response): Promise<Response> => {
        const body = request.body as FunctionDTO
        const result = await this.functionService.addHistory(body)
        const history = await this.functionService.getHistory()
        return response.status(StatusCodes.OK).json({ result })
    }
    history = async (request: Request, response: Response): Promise<Response> => {
        const history = await this.functionService.getHistory()
        return response.status(StatusCodes.OK).json({ history })
    }

}