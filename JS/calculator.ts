
export default class Calculator {
    operand1: number;
    operand2: number;

    constructor(operand1: number, operand2: number) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    }

    add() : number {
        return this.operand1 + this.operand2;
    }

    subtract() : number {
        return this.operand1 - this.operand2;
    }

    multiply() : number {
        return this.operand1 * this.operand2;
    }

    divide() : number{
        return this.operand1 / this.operand2;
    }
}