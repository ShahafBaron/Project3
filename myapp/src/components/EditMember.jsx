import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import utils from "../utils/utils";

const EditMember = () => {
  const storeData = useSelector((state) => state);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [member, setMember] = useState({
    Full_name: storeData.member[0].Full_name,
    Email: storeData.member[0].Email,
    City: storeData.member[0].City,
  });

  const updateMember = async () => {
    let obj = {
      Full_name: member.Full_name,
      Email: member.Email,
      City: member.City,
    };

    await utils.editMember(storeData.member[0]._id, obj);
    dispatch({ type: "ClearMember" });
    navigate("/AllMembers");
  };

  function cancel() {
    dispatch({ type: "ClearMember" });
    navigate("/AllMembers");
  }

  return (
    <div>
      <h3>Edit Member: {storeData.member[0].Full_name}</h3>
      Name:{" "}
      <input
        type="text"
        value={member.Full_name}
        onChange={(e) => setMember({ ...member, Full_name: e.target.value })}
        name="Name"
        className="title_name"
      />
      <br />
      Email:{" "}
      <input
        type="text"
        value={member.Email}
        onChange={(e) => setMember({ ...member, Email: e.target.value })}
        name="Email"
        className="title_email"
      />
      <br />
      City:{" "}
      <input
        type="text"
        value={member.City}
        onChange={(e) => setMember({ ...member, City: e.target.value })}
        name="City"
        className="title_City"
      />
      <br />
      <br />
      <input
        type="button"
        value="Update"
        className="btn"
        onClick={updateMember}
      />
      <input type="button" value="Cancel" className="btn" onClick={cancel} />
    </div>
  );
};

export default EditMember;
