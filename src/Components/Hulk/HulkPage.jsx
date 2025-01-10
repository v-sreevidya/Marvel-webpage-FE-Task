import React from "react";
import "./HulkPage.css";

const HulkPage = () => {
  return (
    <div className="hulk-page">
      
      <div className="hulk-head">
        <p className="hulk-quote">" That's my secret, Cap. I'm always angry "</p>
      </div>

      <div className="hulk-1">
        <div className="hulkposter1"></div>
        <div className="hulkdetails">
          <h3 className="hulkname1">HULK</h3>
          <p className="hulk2011">
          Bruce Banner, a genetics researcher with a tragic past, suffers a lab accident that 
          makes him transform into a raging, giant green monster when angered, 
          making him a target of forces seeking to abuse his power.
          </p>
        </div>
      </div>

      <div className="hulk-2">
        <div className="hulkposter2"></div>
        <div className="hulkdetails">
          <h3 className="hulkname2">THE INCREDIBLE HULK</h3>
          <p className="hulkdark">
          Bruce Banner, a scientist on the run from the U.S. Government,
           must find a cure for the monster he turns into whenever he loses his temper
          </p>
        </div>
      </div>

      
    </div>
  );
};
export default HulkPage;
