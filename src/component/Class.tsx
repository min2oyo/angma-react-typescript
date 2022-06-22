const Class = () => {

  class Car {
    // 방법1
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    // // 방법2
    // constructor(public color: string) {
    //   this.color = color;
    // }
    // // 방법3
    // constructor(readonly color: string) {
    //   this.color = color;
    // }
    start() {
      console.log(`start`);
    }
  }

  const bmw = new Car(`red`);




  return (
    <></>
  );
};

export default Class;