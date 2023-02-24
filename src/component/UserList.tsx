import { useState } from "react";
import "./UserList.style.css";
import {IUser} from "./User.type";
import UserModal from "./UserModal";

type Props = {
  list: IUser[];
  handleDelete: (data: IUser) => void;
  handleEdit: (data: IUser) => void;
};

const UserList = ({ list, handleDelete, handleEdit }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IUser | null);

  const viewUser = (data: IUser) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">User List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Date of birth</th>
          <th>Experience</th>
          <th>Action</th>
        </tr>
        {list.map((user) => {
          return (
            <tr key={user.id}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.birth}</td>
              <td>{user.experience}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewUser(user)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => handleEdit(user)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => handleDelete(user)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <UserModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default UserList;