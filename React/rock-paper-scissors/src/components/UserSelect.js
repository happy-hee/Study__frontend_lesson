const userSelectStyle = {
  display: "flex",
  flexDirection: "column",
  width: 300,
};

const userSelectItemsStyle = {
  cursor: "pointer",
};

const UserSelect = (props) => {
  //유저가 낸 값 선택
  const onUserSelectScissors = () => {
    props.userValueData("가위", props.scissors_img);
  };
  const onUserSelectRock = () => {
    props.userValueData("바위", props.rock_img);
  };
  const onUserSelectPaper = () => {
    props.userValueData("보", props.paper_img);
  };

  props.computerValueSet();
  props.setWinStyle();

  return (
    <div style={userSelectStyle}>
      <div style={userSelectItemsStyle}>
        <img
          src={props.scissors_img}
          alt="가위"
          onClick={onUserSelectScissors}
        />
      </div>
      <div style={userSelectItemsStyle}>
        <img src={props.rock_img} alt="바위" onClick={onUserSelectRock} />
      </div>
      <div style={userSelectItemsStyle}>
        <img src={props.paper_img} alt="보" onClick={onUserSelectPaper} />
      </div>
    </div>
  );
};

export default UserSelect;
