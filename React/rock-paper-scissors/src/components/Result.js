import './Result.css'

const resultContainerStyle = {
  display: "flex",
};
const resultItemsStyle = {
  width: 300,
  height: 300,
};

const Result = (props) => {
  return (
    <>
      <div style={resultContainerStyle}>
        <div className={props.computerWin} style={resultItemsStyle}>
          <p>컴퓨터</p>
          <img src={props.computerValueImg} alt={props.computerValue} />
        </div>
        <div className={props.userWin} style={resultItemsStyle}>
          <p>사용자</p>
          <img src={props.userValueImg} alt={props.userValue} />
        </div>
      </div>
    </>
  );
};

export default Result;
