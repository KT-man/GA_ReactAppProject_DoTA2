import React, { useState } from "react";
import ChildUserProfile from "./ChildUserProfile";
import ChildRecentMatches from "./ChildRecentMatches";
import DotaModal from "./ModalComponents/DotaModal";
import SearchBar from "./SearchBar";

const SummaryStats = (props) => {
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
      <SearchBar
        search={props.search}
        handleSubmit={props.handleSubmit}
        handleSearch={props.handleSearch}
      ></SearchBar>
      <br></br>
      <ChildUserProfile userSummary={props.userSummary} />
      <br></br>
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
