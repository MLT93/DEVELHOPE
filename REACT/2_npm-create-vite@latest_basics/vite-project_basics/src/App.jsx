/* eslint-disable react/prop-types */
export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome name={"John"} age={23} />
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
  if (age >= 18 && age <= 65 && name === "John") {
    return (
      <div>
        <p>Welcome, {name}</p>
        <Age age={age} />
      </div>
    );
  }
};

const Age = ({ age }) => {
  return <p>Your age is {age}</p>;
};
