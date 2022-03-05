import React from "react";
import { useSelector } from "react-redux";

const DisplayUsers = () => {
  const users = useSelector((state) => state.users);

  return (
    <React.Fragment>
      {users.map((user) => (
        <div>
          {user.firstName} {user.lastName} {user.age}
        </div>
      ))}
    </React.Fragment>
  );
};

export default DisplayUsers;
