const Interface = () => {

  type Score = `A` | `B` | `C` | `F`;

  interface User {
    name: string,
    age: number;
    gender?: string;  // 있어도 되고 없어도 되는 옵션으로 설정
    readonly birthYear: number; // readonly
    [grade: number]: Score;  // 'grade'말고 다른 단어를 써도 됨
  };

  let user: User = {
    name: `xx`,
    age: 30,
    birthYear: 2000,
    1: `A`,
    2: `B`
  };

  user.age = 10;
  user.gender = `male`;
  // user.birthYear = 1900;

  console.log(user.name);



  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = function (x, y) {
    return x + y;
  };

  add(10, 20);



  interface IsAdult {
    (age: number): boolean;
  }

  const a: IsAdult = age => {
    return age > 19;
  };

  a(33);  // true

  return (
    <></>
  );
};

export default Interface;