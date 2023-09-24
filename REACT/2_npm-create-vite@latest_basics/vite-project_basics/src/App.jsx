export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome /> {/* if not pass the name Prop, the component rendering only the <p> element with out javascript property */}
    </div>
  );
}

const Hello = () => {
  return (
    <h2>
      Hello, World!
      <hr />
      <Message />
    </h2>
  );
};

const Message = () => {
  return <p>What a beautiful day!</p>;
};

// eslint-disable-next-line react/prop-types
const Welcome = ({ name }) => {
  return <p>Welcome, {name}</p>;
};


