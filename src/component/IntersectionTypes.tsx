const IntersectionTypes = () => {

  interface Car {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }

  const toyCar: Car & Toy = {
    name: `타요`,
    start() { },
    color: `blue`,
    price: 1000
  };

  console.log(toyCar);

  return (
    <></>
  );
};

export default IntersectionTypes;