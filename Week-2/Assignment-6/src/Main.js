const Main = () => (
  <main>
    <WelcomeMessage msg={"Hey"} />
    <Section />
  </main>
);

const WelcomeMessage = ({ msg }) => <div className="main-upper">{msg}</div>;

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
      <CallToAction />
    </div>
  );
};

const ContentBox = ({ content }) => {
  return <div className="content-box">{content}</div>;
};

const CallToAction = () => {
  return <button className="call-to-action">Call to Action</button>;
};

export default Main;
