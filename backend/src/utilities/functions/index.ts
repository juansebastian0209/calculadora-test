import { Big } from "big.js"

import { OperatorEnum } from "../../enums"

export function Calculate(number1: Big, number2: Big, operator: OperatorEnum): string {
    if (operator === OperatorEnum.ADDITION) {
        return number1.add(number2).toString()
    }

    if (operator === OperatorEnum.SUBSTRACTION) {
        return number1.sub(number2).toString()
    }

    if (operator === OperatorEnum.DIVITION) {
        return number1.div(number2).toString();
    }

    if (operator === OperatorEnum.MULTIPLY) {
        return number1.mul(number2).toString()
    }

    throw new Error('El operador no es valido')
}