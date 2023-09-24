/* eslint-disable react/prop-types */
export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome name={name} age={66} />
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
      <Age age={age} />
    </div>
  );
};
const name = <strong>Manuel</strong>;

const Age = ({ age }) => {
  return <div>{age >= 18 && age <= 65 ? <p>Your age is {age}</p> : null}</div>;
};
