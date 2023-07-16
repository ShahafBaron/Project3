import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import utils from "../utils/utils";
import Watched from "./Watched";

const Member = (props) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function editMember() {
    dispatch({ type: "EditMember", payload: props.member });
    navigate("/EditMember");
  }

  const deleteMember = async () => {
    await utils.deleteSingleMember(props.member._id);
  };

  return (
    <div style={{ width: "400px", height: "fit", border: "solid black 4px" }}>
      <h3>{props.member.Full_name}</h3>
      <div style={{ fontWeight: "400" }}>
        Email:
        {" " + props.member.Email}
        <br />
        City:
        {" " + props.member.City}
        <br />
        <input
          type="button"
          value="Edit"
          className="btn"
          onClick={editMember}
        />
        <input
          type="button"
          value="Delete"
          className="btn"
          onClick={deleteMember}
        />
        <Watched MemberID={props.member._id} flag={2} key={props.member._id} />
      </div>
    </div>
  );
};

export default Member;
