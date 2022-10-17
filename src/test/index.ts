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
function calculateTax(income: number): number {
  return 0;
}
