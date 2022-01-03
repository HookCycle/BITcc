import "./style.css";
import { FaInfoCircle } from "react-icons/fa";

export default function Faq() {
  return (
    <div className="home-container">
      <h1>FAQ</h1>

      <div className="home-content">
        <div className="professional-qtt">
          <FaInfoCircle color="#585858" size={25} />
          <span>Sem acesso a conta</span>
          <strong></strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaInfoCircle color="#585858" size={25} />
          <span>Esqueci a senha</span>
          <strong></strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaInfoCircle color="#585858" size={25} />
          <span>Como contatar um educador</span>
          <strong></strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaInfoCircle color="#585858" size={25} />
          <span>Contatar suporte</span>
          <strong></strong>
        </div>
      </div>
    </div>
  );
}
