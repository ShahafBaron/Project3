import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import utils from "../utils/utils";
import Watched from "./Watched";

const OneMemberMember = () => {
  const params = useParams();

  const [member, setMember] = useState([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const getMember = async () => {
      let resp = await utils.getSingleMember(params.id);
      setMember(resp.data);
    };
    getMember();
  }, [params.id]);

  function editMember() {
    dispatch({ type: "EditMember", payload: member });
    navigate("/EditMember");
  }

  const deleteMember = async () => {
    await utils.deleteSingleMember(member._id);
  };

  return (
    <div style={{ width: "400px", height: "fit", border: "solid black 4px" }}>
      <h3>{member.Full_name}</h3>
      <div style={{ fontWeight: "400" }}>
        Email:
        {" " + member.Email}
        <br />
        City:
        {" " + member.City}
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
        <Watched MemberID={params.id} flag={2} key={params.id} />
      </div>
    </div>
  );
};

export default OneMemberMember;
