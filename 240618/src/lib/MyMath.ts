interface IMyMath {
  add(a?: number, b?: number): number;
  add(a?: string, b?: string): number;
}

// 1 = number, 2 = string, 4 = object 8 = array
// bit연산자(1, 10, 100, 1000) => 예시
class MyMath implements IMyMath {
  add(a?: number | string | null | undefined, b?: number | string): number {
    // 1 | 10 => 11 // 2진법
    // 넘어온 인자가 number => 1, 11에 포함
    // 넘어온 인자가 object => 4, 100 => 11에 포함X
    if (!a) a = 1;
    if (!b) b = 1;
    return +a + +b; // 형변환
  }
}

// 부모가 작성해놓은걸 자식이 재정의한것 ==> override
// 호출하는 입장에서 여러 방식으로 호출 ==> overload
// overload 예시: console.log, new Date()

const myMath = new MyMath();
myMath.add();

type TStudent = {
  name: string;
  age: number;
};

const student = { name: "방지완", age: 29 };
const key: keyof TStudent = "name";
console.log(student[key]);

let computer: "Mac" | "Windows" | "Ubuntu" = "Mac";
computer = "Windows";
computer = "Ubuntu";

let studentName:
  | "김강문"
  | "박성민"
  | "방지완"
  | "이동찬"
  | "손민복"
  | "이승배"
  | "이정배" = "이정배";

enum names {
  "김강문",
  "박성민",
  "방지완",
  "이동찬",
  "손민복",
  "이승배",
  "이정배",
}

let studentName2: names = names["박성민"];
