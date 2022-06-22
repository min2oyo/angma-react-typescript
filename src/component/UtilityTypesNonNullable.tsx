// NonNullable
/*
  null을 제외한 타입을 생성
*/

const UtilityTypesNonNullable = () => {

  type T1 = string | null | undefined | void;
  type T2 = NonNullable<T1>;

  function t(t: T2): void {
    console.log(t);
  }

  t(`hi`);

  return (
    <div>UtilityTypesNonNullable</div>
  );
};

export default UtilityTypesNonNullable;