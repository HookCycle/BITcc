import "./style.css";
import { FaNewspaper, FaEdit, FaTrash } from "react-icons/fa";

export default function NewSpaper() {
  return (
    <div className="feed-container">
      <h1>Feed</h1>

      <div className="news-content">
        <div className="professional-qtt">
          <div className="profile-name">
            <FaNewspaper color="#585858" size={25} />
            <span>Joabe Jesus</span>
          </div>
          <div>
            <button>
              <FaEdit color="#585858" size={25} />
            </button>
            <button>
              <FaTrash color="#585858" size={25} />
            </button>
          </div>
        </div>
        <div>
          <p>
            Aberto TCC na area de IA para alunos que se interessarem entrem em
            consectetur libero doloremque. Iste.
          </p>
        </div>
      </div>
      <div className="news-content">
        <div className="professional-qtt">
          <div className="profile-name">
            <FaNewspaper color="#585858" size={25} />
            <span>Joabe Jesus</span>
          </div>
          <div>
            <button>
              <FaEdit color="#585858" size={25} />
            </button>
            <button>
              <FaTrash color="#585858" size={25} />
            </button>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit modi
            illum totam architecto magni reiciendis quia porro aperiam, nostrum
            ipsum id magnam repellendus obcaecati qui, voluptatibus tempora
            itaque iste placeat.
          </p>
        </div>
      </div>
      <div className="news-content">
        <div className="professional-qtt">
          <div className="profile-name">
            <FaNewspaper color="#585858" size={25} />
            <span>Joabe Jesus</span>
          </div>
          <div>
            <button>
              <FaEdit color="#585858" size={25} />
            </button>
            <button>
              <FaTrash color="#585858" size={25} />
            </button>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            deleniti voluptatibus blanditiis dignissimos? Ipsa cupiditate
            perferendis aut culpa perspiciatis reiciendis voluptate fugit
            necessitatibus neque eligendi. Autem quibusdam eligendi numquam
            ducimus, accusantium odit molestiae! Accusantium fugit officiis
          </p>
        </div>
      </div>
      <div className="news-content">
        <div className="professional-qtt">
          <div className="profile-name">
            <FaNewspaper color="#585858" size={25} />
            <span>Joabe Jesus</span>
          </div>
          <div>
            <button>
              <FaEdit color="#585858" size={25} />
            </button>
            <button>
              <FaTrash color="#585858" size={25} />
            </button>
          </div>
        </div>
        <div>
          <p>
            Aberto TCC na area de IA para alunos que se interessarem entrem em
            consectetur libero doloremque. Iste.
          </p>
        </div>
      </div>
    </div>
  );
}
