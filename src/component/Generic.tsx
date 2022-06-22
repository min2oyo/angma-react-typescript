const Generic = () => {

  function getSize<T>(arr: T[]): number {
    return arr.length;
  }

  const arr1 = [1, 2, 3];
  getSize<number | string>(arr1);

  const arr2 = [`a`, `b`, `c`];
  getSize<string>(arr2);

  const arr3 = [false, true, true];
  getSize(arr3);

  const arr4 = [{}, {}, { name: `Tim` }];
  getSize(arr4);


  return (
    <div>Generic</div>
  );
};

export default Generic;