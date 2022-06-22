const GenericInterface = () => {

  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  const m1: Mobile<{ color: string; coupon: boolean; }> = {
    name: `s21`,
    price: 1000,
    option: {
      color: `red`,
      coupon: false
    }
  };
  console.log(`m1`, m1);

  const m2: Mobile<string> = {
    name: `s20`,
    price: 900,
    option: `good`
  };
  console.log(`m2`, m2);



  return (
    <div>GenericInterface</div>
  );
};

export default GenericInterface;