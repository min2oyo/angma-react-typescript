// 접근 제한자(Access modifier) - public, private, protected
/*
  public: 자식 클래스, 클래스 인스턴스 모두 접근 가능
  protected: 자식 클래스에서 접근 가능
  private: 해당 클래스 내부에서만 접근 가능
*/

const AccessModifier = () => {

  class Car {
    readonly name: string = `car`;  // # == private
    color: string;
    static wheels = 4;
    constructor(name: string, color: string) {
      this.name = name;
      this.color = color;
    }
    start() {
      console.log(`start`);
      console.log(this.name);
      console.log(Car.wheels);
    }
  }

  class Bmw extends Car {
    constructor(name: string, color: string) {
      super(name, color);
      console.log(color);
    }
    showName() {
      // console.log(super.name); // 왜 오류 뜨는지 모르겠음
    }
  }

  const z4 = new Bmw(`zzzz4`, `black`);
  console.log(`name`, z4.name);
  console.log(Car.wheels);

  return (
    <></>
  );
};

export default AccessModifier;