// never

const G = () => {

  function showError(): never {
    throw new Error();
  }

  function infLoop(): never {
    while (true) {
      // do something
    }
  }
  showError();
  infLoop();

  return (
    <></>
  );
};

export default G;