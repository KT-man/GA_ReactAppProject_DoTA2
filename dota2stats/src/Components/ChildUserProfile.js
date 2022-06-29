import React from "react";

const ChildUserProfile = (props) => {
  console.log(props);
  return (
    <>
      <table className="table table-sm table-borderless">
        <thead>
          <tr>
            <th>Username</th>
            <th>Last User Login</th>
            <th>Estimated MMR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <p>
                <img
                  src={props.userSummary.profile.avatarmedium}
                  alt="avatar"
                ></img>
                &nbsp;&nbsp;&nbsp;
                {props.userSummary.profile.personaname}
              </p>
            </td>
            <td>{props.userSummary.profile.last_login.split("T")[0]}</td>
            <td>{props.userSummary.competitive_rank}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ChildUserProfile;
