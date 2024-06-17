import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader-mid-pos">
        <svg viewBox="25 25 50 50" className="loader-svg">
          <circle r="20" cy="50" cx="50"></circle>
        </svg>
        <div className="loader-mid-text">
          <p>Please wait..</p>
          <p className="blink">
            The server being hosted on a free tier take around 30 sec to respond
          </p>
        </div>
      </div>
      <div className="loader-pos">
        <div className="laoder-box">
          <div class="loader">
            <span class="loader-text"></span>
            <span class="load"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
