import React from "react";
import "./IronPage.css";

const IronPage = () => {
  return (
    <div className="iron-page">
      
      <div className="iron-head">
        <p className="iron-quote">
          " Part of the journey is the end "
        </p>
      </div>

      <div className="iron-1">
        <div className="ironposter1"></div>
        <div className="irondetails">
          <h3 className="ironname1">IRON MAN</h3>
          <p className="iron2011">
          After being held captive in an Afghan cave, billionaire engineer Tony Stark
           creates a unique weaponized suit of armor to fight evil.
          </p>
        </div>
      </div>

      <div className="iron-2">
        <div className="ironposter2"></div>
        <div className="irondetails">
          <h3 className="ironname2">IRON MAN 2</h3>
          <p className="irondark">
          With the world now aware of his identity as Iron Man, Tony Stark must contend with both
           his declining health and a vengeful mad man with ties to his father's legacy.
          </p>
        </div>
      </div>

      <div className="iron-3">
        <div className="ironposter3"></div>
        <div className="irondetails">
          <h3 className="ironname3">IRON MAN 3</h3>
          <p className="ironragnarok">
          When Tony Stark's world is torn apart by a formidable terrorist called the 
          Mandarin, he starts an odyssey of rebuilding and retribution.
          </p>
        </div>
      </div>

      
    </div>
  );
};
export default IronPage;
