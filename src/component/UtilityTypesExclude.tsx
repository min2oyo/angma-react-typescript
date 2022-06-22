// Exclude<T1, T2>
/*
  T1에서 T2를 제외하고 사용
  Omit은 프로퍼티를 제거
  Exclude는 타입으로 제거
*/

const UtilityTypesExclude = () => {

  type T1 = string | number | boolean;
  type T2 = Exclude<T1, number | string>;

  function t(t: T2): void {
    console.log(t);
  }

  t(true);

  return (
    <div>UtilityTypesExclude</div>
  );
};

export default UtilityTypesExclude;