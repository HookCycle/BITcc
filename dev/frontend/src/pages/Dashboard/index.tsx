import { Link, Route, Switch, useHistory } from "react-router-dom";
import "./style.css";
import Logo from "../../assets/logo2.png";
import {
  FaChalkboardTeacher,
  FaUserEdit,
  FaSignOutAlt,
  FaComments,
  FaQuestion,
  FaNewspaper,
} from "react-icons/fa";
import swal from "sweetalert";
import Home from "./Home";
import EditUser from "./EditUser";
import ChatBox from "./ChatBox";
import Faq from "./Faq";
import NewSpaper from "./NewSpaper";

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
          <Link to="/dashboard/newspaper">
            <FaNewspaper color="#ffffff" size={30} />
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
          <Route exact path="/dashboard/Chatbox" component={ChatBox} />
          <Route exact path="/dashboard/NewSpaper" component={NewSpaper} />
          <Route exact path="/dashboard/Faq" component={Faq} />
        </Switch>
      </div>
    </div>
  );
}
