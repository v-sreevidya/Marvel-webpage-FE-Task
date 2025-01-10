import React from "react";
import "./CaptainPage.css";

const CaptainPage = () => {
  return (
    <div className="captain-page">
      
      <div className="captain-head">
        <p className="captain-quote">" Part of the journey is the end "</p>
      </div>

      <div className="captain-1">
        <div className="captainposter1"></div>
        <div className="captaindetails">
          <h3 className="captainname1">CAPTAIN AMERICA: THE FIRST AVENGER</h3>
          <p className="captain2011">
            Steve Rogers, a rejected military soldier, transforms into Captain
            America after taking a dose of a "Super-Soldier serum". But being
            Captain America comes at a price as he attempts to take down a
            warmonger and a terrorist organization
          </p>
        </div>
      </div>

      <div className="captain-2">
        <div className="captainposter2"></div>
        <div className="captaindetails">
          <h3 className="captainname2">CAPTAIN AMERICA: THE WINTER SOLDIER</h3>
          <p className="captaindark">
            As Steve Rogers struggles to embrace his role in the modern world,
            he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black
            Widow, to battle a new threat from history: an assassin known as the
            Winter Soldier.
          </p>
        </div>
      </div>

      <div className="captain-3">
        <div className="captainposter3"></div>
        <div className="captaindetails">
          <h3 className="captainname3">CAPTAIN AMERICA: CIVIL WAR</h3>
          <p className="captainragnarok">
            Political involvement in the Avengers' affairs causes a rift between
            Captain America and Iron Man.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CaptainPage;
