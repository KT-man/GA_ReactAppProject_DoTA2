import React from "react";

const ChildUserProfile = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-3">
          <img src={props.userSummary.profile.avatarmedium} alt="avatar"></img>
          <p>{props.userSummary.profile.personaname}</p>
        </div>
        <div className="col-6">
          Last User Login: {props.userSummary.profile.last_login.split("T")[0]}
        </div>
        <div className="col-sm-3">
          Estimated Competitive MMR: {props.userSummary.competitive_rank}
        </div>
      </div>
    </>
  );
};

export default ChildUserProfile;
