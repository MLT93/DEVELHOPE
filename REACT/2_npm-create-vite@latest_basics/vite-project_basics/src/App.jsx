/* eslint-disable react/prop-types */
export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome name={"John"} age={17} />
      <div>
        <AlertClock HandleClick={HandleClick} />
      </div>
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
  if (name === "John") {
    return (
      <div>
        <p>Welcome, {name}</p>
        <Age age={age} />
      </div>
    );
  } 
};

const Age = ({ age }) => {
  return age >= 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>;
};

function HandleClick() {
  alert(new Date);
}

const AlertClock = ({ HandleClick }) => {
  return (
    <button onClick={HandleClick}>See current Date</button>
  )
}

