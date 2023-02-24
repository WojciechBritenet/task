import { useState } from "react";
import { IUser } from "./User.type";
import "./UserForm.style.css";

type Props = {
  handleClickBackButton: () => void;
  handleSubmitClick: (data: IUser) => void;
};

const AddUser = ({ handleClickBackButton, handleSubmitClick }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [experience, setExperience] = useState("");

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
    const data: IUser = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      birth: birth,
      experience: experience
    };
    handleSubmitClick(data);
    handleClickBackButton();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add User Form</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="form-label">First Name : </label>
          <input
            className="form-input"
            type="text"
            value={firstName}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label className="form-label">Last Name : </label>
          <input
            className="form-input"
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label className="form-label">Email Add. : </label>
          <input
            className="form-input"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label className="form-label">Password : </label>
          <input
            className="form-input"
            type="text"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label className="form-label">Date of birth : </label>
          <input
            className="form-input"
            type="date"
            value={birth}
            onChange={handleBirthChange}
          />
        </div>
        <div>
          <label className="form-label">Years of experience : </label>
          <input
            className="form-input"
            type="number"
            value={experience}
            onChange={handleExperienceChange}
          />
        </div>
        <div>
          <input
            className="form-input-button"
            type="button"
            value="Back"
            onClick={handleClickBackButton}
          />
          <input
            className="form-input-submit"
            type="submit"
            value="Add User" />
        </div>
      </form>
    </div>
  );
};

export default AddUser;