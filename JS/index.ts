import Calculator from "./calculator.ts";


const chicken : unknown = "chicken";

const calculator = new Calculator(1, 2);
calculator.operand1 = 20;
console.log(calculator.operand1);