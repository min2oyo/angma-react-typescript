const LiteralTypes = () => {

  // 일반
  const userName1 = `Bob`;
  let userName2: string | number = `Tom`;
  userName2 = 3;
  console.log(userName1, userName2);

  type Job = `police` | `developer` | `teacher`;

  interface User {
    name: string;
    job: Job;
  }

  const user: User = {
    name: `Bob`,
    job: `developer`
  };
  console.log(user);

  interface HighSchoolStudent {
    name: string | string;
    grade: 1 | 2 | 3;
  }


  // 유니온 타입
  interface Car {
    name: `car`;
    color: string;
    start(): void;
  }

  interface Mobile {
    name: `mobile`;
    color: string;
    call(): void;
  }

  function getGift(gift: Car | Mobile) {
    console.log(gift.color);
    if (gift.name === `car`) {
      gift.start();
    } else {
      gift.call();
    }
  }



  return (
    <></>
  );
};

export default LiteralTypes;