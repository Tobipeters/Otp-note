import "./noteCard.style.css";
import { FiStar, FiTrash2, FiCircle, FiMoreVertical } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";

const NoteCard = () => {
  return (
    <div className="card note-card">
      <h6 className="note-title mb-1">Meeting with Kelly</h6>
      <h6 className="mb-0 note-date">11/01/2020</h6>
      <p className="mb-0 note-text">
        Suspendisse efficitur diam quis gravida. Nunc molestie est eros.
      </p>
      <div className="d-flex align-items-center footer">
        <FiStar className="icon mr-3 star" />
        <FiTrash2 className="icon trash" />
        <Dropdown className="ml-auto dropdwon-holder">
          <Dropdown.Toggle className="dropdwon-btn">
            <FiMoreVertical className="icon" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <FiCircle className="mr-3 i-1" />
              <span className="d-inline-block align-middle">Personal</span>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <FiCircle className="mr-3 i-2" />
              <span className="d-inline-block align-middle">Work</span>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <FiCircle className="mr-3 i-3" />
              <span className="d-inline-block align-middle">Social</span>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              <FiCircle className="mr-3 i-4" />
              <span className="d-inline-block align-middle">Important</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default NoteCard;
