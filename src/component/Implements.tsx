const Implements = () => {

  // interface
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }

  // 확장(사용 안 하므로 주석)
  // interface Toy {
  //   name: string;
  // }

  // interface ToyCar extends Car, Toy {
  //   price: number;
  // }



  // extends
  interface Benz extends Car {
    door: number;
    stop(): void;
  }

  const benz: Benz = {
    color: `black`,
    wheels: 4,
    start() { },
    door: 5,
    stop() {
      console.log(`stop`);
    }
  };
  console.log(benz);  // {color: 'black', wheels: 4, door: 5, start: ƒ, stop: ƒ}



  // implements
  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(c: string) {
      this.color = c;
    }
    start() {
      console.log(`go..`);
    }
  }

  const b = new Bmw(`green`);
  console.log(b); // {color: 'green', wheels: 4}
  b.start();  // go..



  return (
    <></>
  );
};

export default Implements;