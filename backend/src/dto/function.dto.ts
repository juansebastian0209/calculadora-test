import { IsString, IsNumberString, IsNotEmpty, IsEnum } from "class-validator";
import { OperatorEnum } from "../enums";

export class FunctionDTO {
    @IsString()
    @IsNumberString()
    @IsNotEmpty()
    number1!: string

    @IsString()
    @IsNumberString()
    @IsNotEmpty()
    number2!: string

    @IsString()
    @IsNotEmpty()
    @IsEnum(OperatorEnum)
    operator!: OperatorEnum
}