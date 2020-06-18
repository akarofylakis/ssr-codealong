import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        Im t DShe home component
        <button
          onClick={() => {
            console.log("I clicked!");
          }}
        >
          Press me!
        </button>
      </div>
    </div>
  );
};

export default Home;
