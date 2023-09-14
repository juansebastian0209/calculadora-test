import { ClassConstructor, plainToInstance } from 'class-transformer'
import { Request, Response, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import { validate } from 'class-validator'

export function validateDto<T extends ClassConstructor<unknown>>(classValidator: T) {
    return async (request: Request, response: Response, next: NextFunction) => {
        const dto = plainToInstance(classValidator, request.body)
        const errors = await validate(dto as Object)

        if (errors.length > 0) {
            return response.status(StatusCodes.BAD_REQUEST).json({ errors })
        }

        request.body = dto;
        next()
    }
}