import React from "react";

import ChildRecentMatchRow from "./ChildRecentMatchRow";

const ChildRecentMatches = (props) => {
  return (
    <div>
      <table className="table table-hover table-borderless">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Match Date</th>
            <th scope="col">Player Hero</th>
            <th scope="col">Result</th>
            <th scope="col">Duration</th>
            <th scope="col">KDA</th>
          </tr>
        </thead>
        <tbody>
          {props.recentMatches.map((match, index) => {
            return (
              <ChildRecentMatchRow
                data={match}
                index={index}
                match_id={match.match_id}
                key={match.match_id}
              ></ChildRecentMatchRow>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ChildRecentMatches;
