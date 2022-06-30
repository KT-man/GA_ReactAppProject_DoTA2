import React from "react";

const PageFour = (props) => {
  return (
    <>
      <div>
        <p>
          I guess you can be proud that you have "friends" who suffered losing
          with you for this long
        </p>

        <table className="table table-borderless">
          <thead>
            <tr>
              <th>"Friend"</th>
              <th>Games Lost Together</th>
            </tr>
          </thead>
          <tbody>
            {props.listOfTopLosers.map((loser) => {
              return (
                <tr>
                  <td>
                    <a
                      href={`https://dotabuff.com/players/${loser.account_id}`}
                    >
                      {loser.personaname}
                    </a>
                  </td>
                  <td>{loser.losses}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PageFour;
