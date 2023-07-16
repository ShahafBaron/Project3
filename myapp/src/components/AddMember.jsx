import React, { useState } from "react";
import utils from "../utils/utils";

const AddMember = (props) => {
  const changeDisplay = props.showAddMember;

  const [member, setMember] = useState({
    Full_name: "",
    Email: "",
    City: "",
  });

  const addNewMember = async () => {
    let obj = {
      Full_name: member.Full_name,
      Email: member.Email,
      City: member.City,
    };

    await utils.addMemberToDB(obj);
    changeDisplay(true);
  };

  return (
    <div>
      <h3>Add new Member</h3>
      Name:{" "}
      <input
        type="text"
        onChange={(e) => setMember({ ...member, Full_name: e.target.value })}
        name="Name"
        className="title_name"
      />
      <br />
      Email:{" "}
      <input
        type="text"
        onChange={(e) => setMember({ ...member, Email: e.target.value })}
        name="Email"
        className="title_email"
      />
      <br />
      City:{" "}
      <input
        type="text"
        onChange={(e) => setMember({ ...member, City: e.target.value })}
        name="City"
        className="title_City"
      />
      <br />
      <br />
      <input
        type="button"
        value="Save"
        className="btn"
        onClick={addNewMember}
      />
      <input
        type="button"
        value="Cancel"
        className="btn"
        onClick={() => changeDisplay(true)}
      />
    </div>
  );
};

export default AddMember;
