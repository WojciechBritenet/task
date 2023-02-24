import { useState } from "react";
import { IUser } from "./User.type";
import "./UserForm.style.css";

type Props = {
  data: IUser;
  handleClickBackButton: () => void;
  handleUpdate: (data: IUser) => void;
};

const EditUser = ({ data, handleClickBackButton, handleUpdate }: Props) => {
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState(data.password);
  const [birth, setBirth] = useState(data.birth);
  const [experience, setExperience] = useState(data.experience);

  const handleNameChange = (e: any) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: any) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleBirthChange = (e: any) => {
    setBirth(e.target.value);
  };

  const handleExperienceChange = (e: any) => {
    setExperience(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const updatedData: IUser = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birth: birth,
      experience: experience
    };
    handleUpdate(updatedData);
    handleClickBackButton();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add User Form</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            value={firstName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div>
          <label>Email Add. : </label>
          <input type="text" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password : </label>
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>Date of birth : </label>
          <input
            type="date"
            value={birth}
            onChange={handleBirthChange}
          />
        </div>
        <div>
          <label>Years of experience : </label>
          <input
            type="number"
            value={experience}
            onChange={handleExperienceChange}
          />
        </div>
        <div>
          <input type="button" value="Back" onClick={handleClickBackButton} />
          <input type="submit" value="Update User" />
        </div>
      </form>
    </div>
  );
};

export default EditUser;