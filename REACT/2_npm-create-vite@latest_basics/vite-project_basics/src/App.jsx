import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome name={"John"} age={17} />
      <div>
        <AlertClock handleClick={handleClick} />
        <Counter initialValue={200} incrementAmount={4} decrementAmount={2} />
        <Clock />
        <MouseClicker />
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

function handleClick() {
  alert(new Date().toLocaleString());
}
const AlertClock = ({ handleClick }) => {
  return (
    <p>
      <button onClick={handleClick}>See current Date</button>
    </p>
  );
};

/* const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClickCounter = () => {
    const input = document.getElementById("counter");
    input && setCounter(input.value);
  };

  return (
    <div>
      <span>Counter: {counter}</span>
      <br />
      <input id="counter" type="number"></input>
      <button onClick={handleClickCounter}>Click</button>
    </div>
  );
}; */

const Counter = ({ initialValue, incrementAmount, decrementAmount }) => {
  let [counter, setCounter] = useState(initialValue);

  const amount = () => {
    setCounter(() => counter + incrementAmount);
  };

  const decrement = () => {
    setCounter(() => counter - decrementAmount);
  };

  const reset = () => {
    setCounter(() => (counter = initialValue));
  };

  useEffect(() => {
    const currentValue = document.getElementById("current-value").textContent;

    return () => {
      console.log(currentValue);
    };
  });

  return (
    <div>
      <CounterDisplay counter={counter} />
      <button onClick={amount}>Amount Counter by {incrementAmount}</button>
      <button onClick={decrement}>
        Decrement Counter by {decrementAmount}
      </button>
      <button onClick={reset}>Reset Counter</button>
    </div>
  );
};

const CounterDisplay = ({ counter }) => {
  return <h2 id="current-value">Counter =&gt; {counter}</h2>;
};

const Clock = () => {
  const [currentTimeFormatted, setCurrentTimeFormatted] = useState(
    new Intl.DateTimeFormat("en-GB", {
      timeStyle: "full",
      timeZone: "Europe/Madrid",
    }).format(new Date()),
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      const newTime = new Intl.DateTimeFormat("en-GB", {
        timeStyle: "full",
        timeZone: "Europe/Madrid",
      }).format(new Date());

      setCurrentTimeFormatted(newTime);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <h2>{currentTimeFormatted}</h2>
    </div>
  );
};

const MouseClicker = () => {
  const handleClickMouse = () => console.log(document.getElementsByName("one")[0]);

  return (
    <button name="one" onClick={handleClickMouse}>
      Click here
    </button>
  );
};
