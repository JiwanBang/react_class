function info(constructor: Function) {
  console.log(constructor);
}

function log(
  target: object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method ${String(propertyKey)} was called`);
    console.log(args);
    return originalMethod.apply(this, args);
  };
}

function readonly(target: Object, propertyKey: string) {
  let value = target[propertyKey as keyof Object];
  Object.defineProperty(target, propertyKey, {
    configurable: true,
    get() {
      return value;
    },
    set(newValue) {
      if (value === undefined) value = newValue;
      else throw new Error("두번은 못 넣어");
    },
  });
}

@info
class Test {
  @readonly
  valueReturn(value: number) {
    console.log(`value는?? : ${value}`);
  }
  @log
  // 클래스 실행할 때, 클래스 내 메서드 실행할 때, 필드에서
  sayHello(name: string) {
    console.log(`Hello ${name}`);
  }
}

const test1 = new Test();
test1.sayHello("AWS");
test1.valueReturn(300);
