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

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
// union type
// function kgToLbs(weight: number | string): number {
//   //Narrowing
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }
// kgToLbs(10);
// kgToLbs("10kg");

let weight: number & string;
//Intersection type
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//Literal (exact, specific)
type Quantity = 50 | 100;
type Metric = "cm" | "inch";
let quantity: Quantity = 50;

function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}
greet(undefined);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//optional property access operator
console.log(customer?.birthday?.getFullYear());

//optional element access operator
//optional call

let log: any = null;
log?.("a");
