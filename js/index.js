
let a = 3;
let b = 5;
let c = null;

let out=

`
let a = 3;
let b = 5;
let c = null;\n
-------------\n
a + b = ${a+b}\n
a - b = ${a-b}\n
a * b = ${a * b}\n
a / b = ${a / b}\n
a % b = ${a % b}\n
a += b = ${a += b}\n
a -= b = ${a -= b}\n
a *= b = ${a *= b}\n
a /= b = ${a /= b}\n
a %= b = ${a %= b}\n
a == b = ${a == b}\n
a != b = ${a != b}\n
a > b = ${a > b}\n
a < b = ${a < b}\n
!a && !c = ${!a && !c}\n
!a || !c = ${!a || !c}\n
`;

console.log(out);

let first_name = 'Joseph';
let last_name = 'Alappat';
let email = 'alap0006@algonquinlive.com';

let output = `My name is ${first_name} ${last_name}. You can contact me at ${email}.`;
console.log(output);
