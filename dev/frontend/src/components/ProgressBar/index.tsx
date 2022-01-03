import { FiCheckCircle } from "react-icons/fi";
import "./style.css";

interface ProgressProps {
  page: number;
}

const ProgressBar: React.FC<ProgressProps> = (props) => {
  const style = {
    empty: {
      height: "100%",
      width: `10vw`,
    },
    filled: {
      height: "100%",
      width: `10vw`,
      backgroundColor: "#0490d3",
    },
    stepCheck: {
      background: "#0490d3",
    },
  };
  return (
    <div className="progress-container">
      <div className="step" style={style.stepCheck}>
        <span>1</span>
      </div>
      <div style={props.page > 1 ? style.filled : style.empty}></div>
      <div className="step" style={props.page > 1 ? style.stepCheck : {}}>
        <span>2</span>
      </div>
      <div style={props.page > 2 ? style.filled : style.empty}></div>
      <div className="step" style={props.page > 2 ? style.stepCheck : {}}>
        <span>3</span>
      </div>
      <div style={props.page > 3 ? style.filled : style.empty}></div>
      <div className="step" style={props.page > 3 ? style.stepCheck : {}}>
        <span>4</span>
      </div>
      <div style={props.page > 4 ? style.filled : style.empty}></div>
      <div className="step" style={props.page > 4 ? style.stepCheck : {}}>
        <FiCheckCircle size={20} color="#FFFFFF" />
      </div>
    </div>
  );
};
export default ProgressBar;
