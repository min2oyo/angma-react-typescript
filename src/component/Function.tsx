const Function = () => {

  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  add(1, 2);



  function add2(num1: number, num2: number): void {
    console.log(num1 + num2);
  }
  add2(3, 4);



  function isAdult(age: number): boolean {
    return age > 19;
  }
  isAdult(20);



  function hello(name?: string) {
    return `Hello, ${name || `world`}`;
  }
  function hello2(name = `world`) {
    return `Hello, ${name}`;
  }

  hello();
  hello(`sam`);
  hello2(`ria`);



  function hello3(name: string, age?: number): string {
    if (age !== undefined) {
      return `Hello, ${name}. You are ${age}.`;
    } else {
      return `Hello, ${name}`;
    }
  }
  hello3(`a`, 1);


  function hello4(age: number | undefined, name: string): string {
    if (age !== undefined) {
      return `Hello, ${name}. You are ${age}.`;
    } else {
      return `Hello, ${name}`;
    }
  }
  hello4(undefined, `a`);



  function add3(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0);
  }

  add3(1, 2, 3);
  add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


  return (
    <></>
  );
};

export default Function;