import React from "react";

const Loader = () => {
  return (
    <>
      <div className="loader-mid-pos">
        <div class="container-loader">
          <div id="load">
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="blink">
          please wait the server beign hosted on free server took aroung 30s to
          respond
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
