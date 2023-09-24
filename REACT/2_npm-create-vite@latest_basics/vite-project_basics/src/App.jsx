export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome name={name} age={22} /> {/* if not pass the Props, the component rendering only the <p> element without javascript property */}
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
const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name}</p>
      <p>Your age is {age}</p>
    </div>
  )
};

const name = <strong>Manuel</strong>
