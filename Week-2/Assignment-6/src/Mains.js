import React, { useState } from "react";

const Mains = () => {
  const [message, setMessage] = useState("Welcome Message");

  const handleClick = () => {
    setMessage("Have a good day!");
  };

  return (
    <main className="main">
      <div className="main-upper" onClick={handleClick}>
        {message}
      </div>
      <Section />
      <HiddenSection />
    </main>
  );
};

const Section = () => {
  return (
    <div className="main-lower">
      <h2>Section Title</h2>
      <div className="content-box-container">
        <ContentBox content="Content Box 1" />
        <ContentBox content="Content Box 2" />
        <ContentBox content="Content Box 3" />
        <ContentBox content="Content Box 4" />
      </div>
    </div>
  );
};

const HiddenSection = () => {
  const [hiddenStatus, setHideenStatus] = useState("hidden-container");

  const handleClick = () => {
    setHideenStatus("content-box-container");
  };

  return (
    <div className="main-lower">
      <button className="call-to-action" onClick={handleClick}>
        Call to Action
      </button>
      <div className={hiddenStatus}>
        <ContentBox content="Content Box 5" />
        <ContentBox content="Content Box 6" />
        <ContentBox content="Content Box 7" />
        <ContentBox content="Content Box 8" />
      </div>
    </div>
  );
};

const ContentBox = ({ content }) => {
  return <div className="content-box">{content}</div>;
};

export default Mains;
