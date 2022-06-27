import React from "react";
import SearchBar from "./SearchBar";
import ChildRecentMatchRow from "./ChildRecentMatchRow";

const ChildRecentMatches = (props) => {
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Hero</th>
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
