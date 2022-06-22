const Overload = () => {

  interface User {
    name: string;
    age: number;
  }

  // overload
  function join(name: string, age: number): User;
  function join(name: string, age: string): string;
  function join(name: string, age: number | string): User | string {
    if (typeof age === `number`) {
      return {
        name,
        age,
      };
    } else {
      return `나이를 숫자로 입력해주세요`;
    }
  }

  const sam: User = join(`Sam`, 30);
  const jane: string = join(`Jane`, `30`);

  console.log(sam, jane);

  return (
    <></>
  );
};

export default Overload;