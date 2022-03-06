import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../action-creators/userActionCreator";

const DisplayUsers = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(`In display users ${users}`);
  return (
    users && (
      <center style={{ margin: "20px" }}>
        {users.map((user) => (
          <div>
            {user.firstName} {user.lastName} {user.age}
          </div>
        ))}
      </center>
    )
  );
};

export default DisplayUsers;
