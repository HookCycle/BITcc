import "./style.css";
import { FaUser, FaBell } from "react-icons/fa";

export default function ChatBox() {
  return (
    <div className="home-container">
      <h1>ChatBox</h1>

      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#adff2f" size={25} />
          <span>Lucas Hellanio</span>
          <strong>
            <FaBell />
          </strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#ff0000" size={25} />
          <span>Pedro Gabriel</span>
          <strong>
            <FaBell />
          </strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#ff0000" size={25} />
          <span>Victor guilherme</span>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#adff2f" size={25} />
          <span>Silas Nunes</span>
          <strong>
            <FaBell />
          </strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#adff2f" size={25} />
          <span>Eric Monteiro</span>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#ffff00" size={25} />
          <span>Bruna Lins</span>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#ffff00" size={25} />
          <span>Rafaela Melo</span>
          <strong>
            <FaBell />
          </strong>
        </div>
      </div>
    </div>
  );
}
