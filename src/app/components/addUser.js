import { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../actions";
import DisplayUsers from "./displayUsers";

const AddUser = () => {
  const [user, setUser] = useState({ firstName: "", lastName: "", age: 0 });
  const [showAllUsers, setShowAllUsers] = useState(false);
  const { firstName, lastName, age } = user;

  const dispatch = useDispatch();

  const handleAddUser = () => {
    console.log(`adding ${firstName} ${lastName} ${age}`);
    dispatch({
      type: ADD_USER,
      payload: user,
    });
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
    <>
      Add User Screen
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
      <div>
        <button onClick={() => setShowAllUsers((prev) => !prev)}>
          Toggle All Users Display
        </button>
      </div>
      {showAllUsers && (
        <div>
          <div>All Users</div>
          <DisplayUsers />
        </div>
      )}
    </>
  );
};

export default AddUser;
