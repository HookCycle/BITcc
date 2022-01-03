import { Link, Route, Switch, useHistory } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/logo2.png";
import {
  FaChalkboardTeacher,
  FaUserEdit,
  FaSignOutAlt,
  FaComments,
  FaQuestion,
} from "react-icons/fa";
import Home from "./Home";
import EditUser from "./EditUser";
import swal from "sweetalert";
import ChatBox from "./chatBox";
import Faq from "./faq";

export default function Dashboard() {
  const history = useHistory();
  function onLogout() {
    swal({
      title: "Você está sendo deslogado",
      text: "Tem certeza que deseja sair?",
      icon: "warning",
      timer: 10000,
      dangerMode: true,
      buttons: {
        cancel: { visible: true, text: "Cancelar" },
        confirm: { visible: true, text: "Sair" },
      },
    }).then((willConfirm) => {
      if (willConfirm) {
        localStorage.removeItem("id");
        history.push("/");
      }
    });
  }

  return (
    <div className="dashboard-container">
      <div className="menu-container">
        <Link to="/dashboard">
          <img src={Logo} alt="logo" />
        </Link>

        <div className="menu">
          <Link to="/dashboard">
            <FaChalkboardTeacher color="#ffffff" size={30} />
          </Link>
          <Link to="/dashboard/useredit">
            <FaUserEdit color="#ffffff" size={30} />
          </Link>
          <Link to="/dashboard/chatbox">
            <FaComments color="#ffffff" size={30} />
          </Link>
          <Link to="/dashboard/faq">
            <FaQuestion color="#ffffff" size={30} />
          </Link>

          <button onClick={onLogout}>
            <FaSignOutAlt color="#ffffff" size={30} />
          </button>
        </div>
      </div>
      <div className="dashboard-content">
        <Switch>
          <Route exact path="/dashboard/" component={Home} />
          <Route exact path="/dashboard/useredit" component={EditUser} />
          <Route exact path="/dashboard/chatbox" component={ChatBox} />
          <Route exact path="/dashboard/faq" component={Faq} />
        </Switch>
      </div>
    </div>
  );
}
