const UtilityTypesReadonly = () => {

  interface User {
    id: number;
    name: string;
    age?: number;
  }

  let admin: Readonly<User> = {
    id: 1,
    name: `Bob`
  };

  console.log(`admin`, admin);

  // admin.id = 4; // 변경 못함


  return (
    <div>UtilityTypesReadonly</div>
  );
};

export default UtilityTypesReadonly;