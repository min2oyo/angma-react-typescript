const B = () => {

  function showItems(arr: number[]) {
    arr.forEach(item => {
      console.log(item);
    });
  }

  showItems([1, 2, 3]);
  // showItems(1, 2, 3);

  return (
    <></>
  );
};

export default B;