import "./style.css";
import {
  FaUser,
  FaCalendarAlt,
  FaVideo,
  FaClipboardList,
  FaMedal,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo, Joabe</h1>
      <h2>Dashboard</h2>
      <div className="home-content">
        <div className="professional-qtt">
          <FaUser color="#585858" size={25} />
          <span>Quantidade total de alunos mentorados</span>
          <strong>5</strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaVideo color="#585858" size={25} />
          <span>Salas virtuais</span>
          <strong>5</strong>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaCalendarAlt color="#585858" size={25} />
          <span>Calendario</span>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaMedal color="#585858" size={25} />
          <span>Perfil Educacional</span>
        </div>
      </div>
      <div className="home-content">
        <div className="professional-qtt">
          <FaClipboardList color="#585858" size={25} />
          <span>Realizar postagem</span>
        </div>
      </div>
    </div>
  );
}
