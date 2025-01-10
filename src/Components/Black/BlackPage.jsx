import React from "react";
import "./BlackPage.css";

const BlackPage = () => {
  return (
    <div className="black-page">
      
      <div className="black-head">
        <p className="black-quote">
          " I've got red in my ledger. I'd like to wipe it out "
        </p>
      </div>

      <div className="black-1">
        <div className="blackposter1"></div>
        <div className="blackdetails">
          <h3 className="blackname1">BLACK WIDOW</h3>
          <p className="black2011">
          Natasha Romanoff confronts the darker parts of her 
          ledger when a dangerous conspiracy with ties to her past arises.
          </p>
        </div>
      </div>

      <div className="black-2">
        <div className="blackposter2"></div>
        <div className="blackdetails">
          <h3 className="blackname2">THE AVENGERS</h3>
          <p className="blackdark">
          Earth's mightiest heroes must come together and learn to fight as a
           team if they are going to stop the mischievous Loki and his alien
            army from enslaving humanity.
          </p>
        </div>
      </div>

      

     
    </div>
  );
};
export default BlackPage;
