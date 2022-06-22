const UtilityTypesPick = () => {

  interface User {
    id: number;
    name: string;
    age: number;
    gender: `M` | `W`;
  }

  const admin: Pick<User, `id` | `name`> = {
    id: 0,
    name: `Bob`
  };

  console.log(`admin`, admin);

  return (
    <div>UtilityTypesPick</div>
  );
};

export default UtilityTypesPick;