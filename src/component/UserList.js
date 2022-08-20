import React from "react";

const UserList = ({ item, index }) => {
  const { name, age, sex } = item;
  return (
    <tr>
            <th>{index +1}</th>
            <td>{name}</td>
            <td>{age}</td>
            <td>{sex}</td>
          </tr>
  );
};

export default UserList;
