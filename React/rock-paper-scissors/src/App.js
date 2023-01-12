import "./App.css";
import { useState } from "react";

import Result from "./components/Result";
import UserSelect from "./components/UserSelect";
import scissors_img from "./images/scissors.png";
import rock_img from "./images/rock.png";
import paper_img from "./images/paper.png";

const container = {
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

function App() {
  const [userValue, setUserValue] = useState('바위');
  const [userValueImg, setUserValueImg] = useState(rock_img);
  const [computerValue, setComputerValue] = useState("가위");
  const [computerValueImg, setComputerValueImg] = useState(scissors_img);   
  const [userWin, setUserWin] = useState("");
  const [computerWin, setComputerWin] = useState("");

  //유저가 낸 값
  const userValueData = (userValueData, userValueDataImg) => {
    setUserValue(userValueData);
    setUserValueImg(userValueDataImg);
  };

  //컴퓨터가 낼 값 (가위, 바위, 보 중 하나)
  const computerValueSet = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
      // computerValueData('바위', rock_img)
      setComputerValue('바위')
      setComputerValueImg(rock_img)
    } else if (randomNumber === 2) {
      // computerValueData('보', paper_img)
      setComputerValue('보')
      setComputerValueImg(paper_img)
    } else if (randomNumber === 0) {
      // computerValueData('가위', scissors_img)
      setComputerValue('가위')
      setComputerValueImg(scissors_img)
    }
  };

  const setWinStyle = () => {
    if ( //컴퓨터가 이긴 경우
      (computerValue === "가위" && userValue === "보") ||
      (computerValue === "바위" && userValue === "가위") ||
      (computerValue === "보" && userValue === "바위")
    ) {
      setComputerWin("winStyle");
      setUserWin("");
    } else if ( //유저가 이긴 경우
      (userValue === "가위" && computerValue === "보") ||
      (userValue === "바위" && computerValue === "가위") ||
      (userValue === "보" && computerValue === "바위")
    ) {
      setUserWin("winStyle");
      setComputerWin("");
    } else if (userValue === computerValue) { //비긴 경우
      setUserWin("");
      setComputerWin("");
    }
  };
  

  return (
    <div style={container}>
      <Result
        userValue={userValue}
        userValueImg={userValueImg}
        computerValue={computerValue}
        computerValueImg={computerValueImg}
        userWin={userWin}
        computerWin={computerWin}
      />
      <UserSelect
        userValueData={userValueData}
        computerValueSet={computerValueSet}
        setWinStyle={setWinStyle}
        scissors_img={scissors_img}
        rock_img={rock_img}
        paper_img={paper_img}
      />
    </div>
  );
}

export default App;
