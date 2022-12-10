import React from "react";

const Table = (props) => {
  return (
    <>
      <tr>
        <td>{props.item.first_name}</td>
        <td>{props.item.last_name}</td>
        <td>{props.item.email}</td>
        <td>{props.item.gender}</td>
        <td>{props.item.ip_address}</td>
        <td>{props.item.airport_code}</td>
        <td>{props.item.time}</td>

        <td>
          {props.item.status == true ? (
            <div className="first">{props.item.status.toString()}</div>
          ) : (
            <div className="second">{props.item.status.toString()}</div>
          )}
        </td>
        <td>{props.item.mobile}</td>
        <td>{props.item.area}</td>
        <td>{props.item.show.toString()}</td>
        <td> {props.item.status.toString()}</td>
      </tr>
    </>
  );
};

export default Table;
