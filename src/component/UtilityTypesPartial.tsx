const UtilityTypesPartial = () => {

  interface User {
    id: number;
    name: string;
    age: number;
    gender: `m` | `f`;
  };

  let admin: Partial<User> = {
    id: 1,
    name: `Bob`
  };

  console.log(admin);

  return (
    <div>UtilityTypesPartial</div>
  );
};

export default UtilityTypesPartial;