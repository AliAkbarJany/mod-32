/* function doubleOld(num) {
    // const result = num * 2;
    return num * 2;
} */
/* const finalResult = doubleOld(4);
console.log(finalResult); */

const numbers = [3, 6, 2, 8, 9];
const output = [];

const doubleIt = number2 => number2 * 2;

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // for(const number of numbers)
    console.log(i, number);
    // const result = number * 2;
    const result = doubleIt(number);
    // console.log(result);
    output.push(result);

}
console.log(output);


// mapping======
const output2 = numbers.map(doubleIt);
// const output2 = numbers.map(number2 => number2 * 2);
// const output2 = numbers.map(x => x * 2);
console.log(output2);

const squares = numbers.map(x => x * x);
console.log(squares);



