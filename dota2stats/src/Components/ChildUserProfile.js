import React from "react";

const ChildUserProfile = (props) => {
  let firstGameTime = props.firstGame.start_time;
  firstGameTime = new Date(firstGameTime * 1000).toLocaleString("en-GB", {
    dateStyle: "medium",
  });
  return (
    <>
      <table className="table table-sm table-borderless">
        <thead>
          <tr>
            <th>Username</th>
            <th>Player Since:</th>
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
            <td>{firstGameTime}</td>
            <td>{props.userSummary.competitive_rank}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ChildUserProfile;
