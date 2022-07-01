import React, { useState } from "react";
import ChildUserProfile from "./ChildUserProfile";
import ChildRecentMatches from "./ChildRecentMatches";
import DotaModal from "./ModalComponents/DotaModal";

const SummaryStats = (props) => {
  console.log(props);
  const [showModal, setShowModal] = useState(false);
  const toSetShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {showModal && (
        <DotaModal
          toSetShowModal={toSetShowModal}
          summaryStats={props.summaryStats}
          userPeers={props.userPeers}
          userHeroStats={props.userHeroStats}
        ></DotaModal>
      )}

      <br></br>
      <ChildUserProfile
        userSummary={props.userSummary}
        firstGame={props.summaryStats[props.summaryStats.length - 1]}
      />

      <ChildRecentMatches
        recentMatches={props.recentMatches}
      ></ChildRecentMatches>
      <br></br>
      <button className="btn btn-danger" onClick={toSetShowModal}>
        Find Out More!
      </button>
    </div>
  );
};

export default SummaryStats;
