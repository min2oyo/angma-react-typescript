const UtilityTypesOmit = () => {

  interface User {
    id: number;
    name: string;
    age: number;
    gender: `M` | `W`;
  }

  const admin: Omit<User, `age` | `gender`> = {
    id: 0,
    name: `Bob`
  };

  console.log(`admin`, admin);

  return (
    <div>UtilityTypesOmit</div>
  );
};

export default UtilityTypesOmit;