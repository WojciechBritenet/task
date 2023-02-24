import { useEffect, useState} from "react";
import "./Home.style.css";
import {IUser, PageEnum} from "./User.type";
import UserList from "./UserList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

const Home = () => {
  const [userList, setUserList] = useState([] as IUser[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IUser);

  useEffect(() => {
    const listInString = window.localStorage.getItem("UserList");
    if (listInString) {
      _setUserList(JSON.parse(listInString));
    }
  }, []);

  const handleAddUser = () => {
    setShownPage(PageEnum.add);
  };

  const handleShowListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setUserList = (list: IUser[]) => {
    setUserList(list);
    window.localStorage.setItem("UserList", JSON.stringify(list));
  };

  const addUser = (data: IUser) => {
    _setUserList([...userList, data]);
  };

  const deleteUser = (data: IUser) => {
    const indexToDelete = userList.indexOf(data);
    const tempList = [...userList];
    tempList.splice(indexToDelete, 1);
    _setUserList(tempList);
  };

  const editUserData = (data: IUser) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IUser) => {
    const filteredData = userList.filter((user) => user.id === data.id)[0];
    const indexOfRecord = userList.indexOf(filteredData);
    const tempData = [...userList];
    tempData[indexOfRecord] = data;
    _setUserList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>Recruitment task:</h1>
        </header>
      </article>
      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add User"
              onClick={handleAddUser}
              className="add-user-btn"
            />
            <UserList
              list={userList}
              handleDelete={deleteUser}
              handleEdit={editUserData}
            />
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddUser
            handleClickBackButton={handleShowListPage}
            handleSubmitClick={addUser}
          />
        )}
        {shownPage === PageEnum.edit && (
          <EditUser
            data={dataToEdit}
            handleClickBackButton={handleShowListPage}
            handleUpdate={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;