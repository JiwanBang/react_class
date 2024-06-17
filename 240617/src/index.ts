import App from "./App";

new App(document.getElementById("root"));

console.log("Hello World!");
let num: number;
// console.log(num);

// num = 1 <<= 1을 할당함으로써 number Type을 강제한다

let numStr: string = "1";

// console.log(num == numStr);
// Type에 대해서 정확하고 && 명확하게

let obj: { a: number; b: string } = {
  a: 1,
  b: "1",
  //   c: "testing" << 위에서 얘기하는 Type에 포함되지 않는다
};

let obj2: any = {
  a: 1,
  b: "1",
  c: "testing",
};
// any:  모든 타입을 할당할 수 있다.

function add(a: number, b: number): number {
  return a + b;
}

let obj3: unknown = add(1, 2);
console.log(obj3);
// unknown: any 이외에 다른 타입을 할당할 수 없음

// any, unknown ==> 잘 안씀

// type
type Test = {
  a: number;
  b: string;
};
let test: Test = { a: 1, b: "1" };
type Test2 = Test & {
  c: Function;
};
let test1: Test2 = { a: 1, b: "1", c: (): void => {} };

type Test3 = Test2 & { d: string };
let test2: Test3 = { a: 1, b: "1", c: (): void => {}, d: "1234" };
let test3: Test;

// 대문자 I를 붙이는 명명법칙
interface ITestClass {
  getA(): number;
  getB(): string;
}
class TestClass implements ITestClass {
  private a: number;
  private b: string;

  constructor() {
    this.a = 123;
    this.b = "123";
    // 여기에 있는 a,b를 가져다쓴다(this)
  }
  getA = (): number => {
    return this.a;
  };
  getB = (): string => {
    return this.b;
  };
}

const testClass: ITestClass = new TestClass();
console.log(testClass.getA());
console.log(testClass.getB());

// 결합도 응집도 => 객체지향

interface IPerson {
  getName(): string;
  getClassName(): string;
  //   getJob?: Function;
  //? => 들어갈수도/아닐수도 있음
}

class Person implements IPerson {
  private name: string;
  private className: string;

  constructor(name: string, className: string) {
    this.name = name;
    this.className = className;
  }

  getName(): string {
    return this.name;
  }
  getClassName(): string {
    return this.className;
  }
}

interface IStudent extends IPerson {}
class Student extends Person implements IStudent {
  //   name: string;
  //   className: string;
  //   company: string; == > student//company 이상함 ==> 응집도 개념

  constructor(name: string, className: string) {
    // this.name = name;
    // this.className = className;
    // this.company = company;
    super(name, className);
  }
}

interface ITeacher extends IPerson {
  getJob(): string;
}
class Teacher extends Person implements ITeacher {
  //   name: string;
  //   className: string;
  job: string;

  constructor(name: string, className: string, job: string) {
    // this.name = name;
    super(name, className);
    this.job = job;
  }
  getJob(): string {
    return this.job;
  }
}

const ljb: IStudent = new Student("이정배", "AWS");
const jkh: ITeacher = new Teacher("정경훈", "AWS", "교수");

const arr: Array<IPerson> = [ljb, jkh];
arr.push(ljb);
arr.push(jkh);
jkh.getJob();
(arr[1] as ITeacher).getJob();
