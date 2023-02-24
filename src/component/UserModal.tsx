import { IUser } from "./User.type";
import "./UserModal.style.css";

type Props = {
  onClose: () => void;
  data: IUser;
};

const UserModal = ({ onClose, data }: Props) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>User Data</h3>
        <div>
          <div>
            <label>First Name : {data.firstName}</label>
          </div>
          <div>
            <label>Last Name : {data.lastName}</label>
          </div>
          <div>
            <label>Email Add. : {data.email}</label>
          </div>
          <div>
            <label>Password : {data.password}</label>
          </div>
          <div>
            <label>Date of birth : {data.birth}</label>
          </div>
          <div>
            <label>Experience : {data.experience}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;