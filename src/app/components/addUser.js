import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUser } from "../action-creators/userActionCreator";

const AddUser = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", age: 0 });
  const { firstName, lastName, age } = user;

  const dispatch = useDispatch();

  const handleAddUser = () => {
    console.log(`adding ${firstName} ${lastName} ${age}`);
    dispatch(saveUser({ firstName, lastName, age }));
  };

  const handleChange = (update) => {
    setUser((prev) => {
      return {
        ...prev,
        ...update,
      };
    });
  };
  console.log(`${firstName} ${lastName} ${age}`);
  return (
    <center style={{ margin: "20px" }}>
      <label style={{ margin: "20px", "font-weight": "bold" }}>
        Add User Screen
      </label>
      <div>
        First Name:{" "}
        <input
          type="text"
          value={firstName}
          onChange={(e) => handleChange({ firstName: e.target.value })}
        />
      </div>
      <div>
        Last Name:{" "}
        <input
          type="text"
          value={lastName}
          onChange={(e) => handleChange({ lastName: e.target.value })}
        />
      </div>
      <div>
        Age:{" "}
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange({ age: e.target.value })}
        />
      </div>
      <div>
        <button onClick={handleAddUser}>Add User</button>
      </div>
    </center>
  );
};

export default AddUser;
