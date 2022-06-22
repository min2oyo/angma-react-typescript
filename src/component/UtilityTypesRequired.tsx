const UtilityTypesRequired = () => {

  interface User {
    id: number;
    name: string;
    age?: number;
  }

  let admin: Required<User> = {
    id: 1,
    name: `Bob`,
    age: 30 // 필수
  };

  console.log(`admin`, admin);


  return (
    <div>UtilityTypesRequired</div>
  );
};

export default UtilityTypesRequired;