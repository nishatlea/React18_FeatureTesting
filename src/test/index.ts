//console.log("Typescript");
let age: number = 10;
if (age < 50) age += 10;
let sales = 123_456_789;
let course = "Typescript";
let is_published: boolean = true;
let level;
let numbers: number[] = [1, 2, 3];
//numbers.forEach((element) => console.log(element.toString));
let user: [number, string] = [1, "Mosh"];

const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);
// function render(document: any) {
//   console.log(document);
// }
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}
calculateTax(10_000, 2022);

let employee: { id: number; name?: string } = { id: 1 };
employee.name = "Mosh";
