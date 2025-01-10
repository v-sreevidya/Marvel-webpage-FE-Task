import React from "react";
import "./ThorPage.css";

const ThorPage = () => {
  return (
    <div className="thor-page">
     
      <div className="thor-head">
        <p className="thor-quote">
          " Whosoever holds this hammer, if he be worthy, shall possess the
          power of Thor "
        </p>
      </div>

      <div className="thor-1">
        <div className="thorposter1"></div>
        <div className="thordetails">
          <h3 className="thorname1">THOR 2011</h3>
          <p className="thor2011">
            The powerful but arrogant god Thor is cast out of Asgard to live
            amongst humans in Midgard (Earth), where he soon becomes one of
            their finest defenders.
          </p>
        </div>
      </div>

      <div className="thor-2">
        <div className="thorposter2"></div>
        <div className="thordetails">
          <h3 className="thorname2">THOR: THE DARK WORLD</h3>
          <p className="thordark">
            When the Dark Elves attempt to plunge the universe into darkness,
            Thor must embark on a perilous and personal journey that will
            reunite him with doctor Jane Foster.
          </p>
        </div>
      </div>

      <div className="thor-3">
        <div className="thorposter3"></div>
        <div className="thordetails">
          <h3 className="thorname3">THOR RAGNAROK</h3>
          <p className="thorragnarok">
            Imprisoned on the planet Sakaar, Thor must race against time to
            return to Asgard and stop Ragnarök, the destruction of his world, at
            the hands of the powerful and ruthless villain Hela.
          </p>
        </div>
      </div>

      <div className="thor-4">
        <div className="thorposter4"></div>
        <div className="thordetails">
          <h3 className="thorname4">THOR LOVE AND THUNDER</h3>
          <p className="thorlove">
            Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane
            Foster to fight Gorr the God Butcher, who intends to make the gods
            extinct.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ThorPage;
