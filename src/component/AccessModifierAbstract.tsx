// 추상 클래스

const AccessModifierAbstract = () => {

  abstract class Car {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      console.log(`start`);
    }
    abstract doSomething(): void; // 자식에서 무조건 구현
  }

  // const car = new Car(`red`);  // 사용불가 // 상속을 통해서만 사용 가능

  class Bmw extends Car {
    constructor(color: string) {
      super(color);
      console.log(color);
    }
    doSomething(): void {
      console.log(3);
    }
  }

  const z4 = new Bmw(`black`);
  console.log(`z4`, z4);

  return (
    <div>AccessModifierAbstract</div>
  );
};

export default AccessModifierAbstract;