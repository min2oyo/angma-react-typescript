const UtilityTypesRecord = () => {

  // 1
  type Grade = `1` | `2` | `3` | `4`;
  type Score = `A` | `B` | `C` | `D` | `F`;

  const score: Record<Grade, Score> = {
    1: `A`,
    2: `C`,
    3: `B`,
    4: `D`,
  };

  console.log(`score`, score);

  // 2
  interface User {
    id: number;
    name: string;
    age: number;
  }

  function isValid(user: User) {
    const result: Record<keyof User, boolean> = {
      id: user.id > 0,
      name: user.name !== ``,
      age: user.age > 0
    };
    return result;
  }

  console.log(`isValid`, isValid);

  return (
    <div>UtilityTypesRecord</div>
  );
};

export default UtilityTypesRecord;