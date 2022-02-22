const myArray = [12, 23, 45, 56];
console.log(myArray);

const [p, q] = [99, 88, 77, 66];
console.log(p);
console.log(p, q);

const { fisrt, second } = { fish: 'katla', color: 'maita', weight: 2 };
console.log(fisrt, second);
/* output====
undefined undefined */

const { fish, color } = { fish: 'katla', color: 'maita', weight: 2 };
console.log(fish, color);
/* output===
katla maita */


const company = {
    Name: 'gp',
    ceo: { Name: 'amir', Id: 3, address: 'dhaka' },
    web: {
        work: 'website development', employee: 23,

        tech:
        {
            first: 'html',
            second: 'css',
            third: 'js'
        },
    },
};

console.log(company.web.tech.third);/* output== js */
// console.log(company.backend.tech.third);/* output==  TypeError: Cannot read properties of undefined (reading 'tech') */

console.log(company.backend);/* output==  undefined */
console.log(company.backend.tech);/* output==  TypeError: Cannot read properties of undefined (reading 'tech') */

console.log(company?.backend?.tech);/* output==  undefined */
