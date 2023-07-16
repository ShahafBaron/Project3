import React, { useState, useEffect, useCallback } from "react";
import utils from "../utils/utils";
import Member from "../components/Member";
import AddMember from "../components/AddMember";

function Members() {
  const [showDefault, setShowDefault] = useState(true);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      let resp = await utils.getAllMembers();
      setMembers(resp.data);
    };
    getMembers();
  });

  const showAddMember = useCallback(() => {
    setShowDefault(true);
  }, []);

  return (
    <div style={{ width: "99%", border: "solid black 4px" }}>
      <h1>Subscriptions</h1>
      <span>
        <input
          type="button"
          value="All Members"
          className="btn"
          onClick={() => setShowDefault(true)}
        />
        <input
          type="button"
          value="Add Member"
          className="btn"
          onClick={() => setShowDefault(false)}
        />
      </span>

      <div>
        {showDefault ? (
          <div>
            {members.map((item) => {
              return <Member member={item} key={item._id} />;
            })}
          </div>
        ) : (
          <div>
            <AddMember showAddMember={showAddMember} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Members;
