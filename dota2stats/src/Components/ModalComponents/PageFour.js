import React from "react";

const PageFour = (props) => {
  console.log(props);
  return (
    <>
      <div>
        <p>
          I guess you can be proud that you have "friends" who like losing as
          much as you
        </p>
        <br></br>
        <p>HALL OIF FA-(il)-ME</p>
        <table className="table">
          <thead>
            <tr>
              <th>"Friend"</th>
              <th>Games Lost</th>
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
