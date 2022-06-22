// enum

const H = () => {

  enum Os {
    Window,
    Ios = 3,
    Android
  }

  console.log(Os[0]); // Window
  console.log(Os[`Ios`]); // 3

  let myOs: Os;
  myOs = Os.Window;

  console.log(myOs);

  enum Os1 {
    Window = `win`,
    Ios = `ios`,
    Android = `and`
  }

  console.log(Os1); // {Window: 'win', Ios: 'ios', Android: 'and'}

  return (
    <></>
  );
};

export default H;