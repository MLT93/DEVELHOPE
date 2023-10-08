/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Message />
      <Welcome name={"John"} age={16} />
      <div>
        <hr />
        <AlertClock handleClick={handleClick} />
        <hr />
        <Counter initialValue={200} incrementAmount={4} decrementAmount={2} />
        <hr />
        <Clock />
        <hr />
        <MouseClicker />
        <hr />
        <MultiButton />
        <hr />
        <InteractiveWelcome />
        <hr />
        <OnLogin />
        <hr />
        <UncontrolledLogin />
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

const Welcome = ({ name, age }) => {
  return (
    <>
      <p>Welcome, {name}</p>
      <Age age={age && age} />
    </>
  );
};

const Age = ({ age }) => {
  if (age !== undefined && age >= 18) {
    return <p>Your age is {age}</p>;
  } else if (age !== undefined && age < 18) {
    return <p>You are very young!</p>;
  } else {
    return null;
  }
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
  const handleClickButton = (event) => console.log(event.target.name);
  const handleClickImg = (event) => console.log(event.src);

  return (
    <button name="one" style={{ color: "red" }} onClick={handleClickButton}>
      <img
        style={{ width: "150px", height: "auto" }}
        name="image"
        src="https://www.rionegro.com.ar/wp-content/uploads/2022/07/EMPANADAS-CRIOLLAS-VA1.jpg?w=920&h=517&crop=1"
        alt="image"
        onClick={handleClickImg}></img>
      {/* Para impedir que se imprima el nombre del botón cuando se hace click en la imagen, hay que utilizar el `.target` porque cuando se ejecuta `click`, te da acceso al elemento específico que fue clickeado y no al nodo raíz donde se implementa el código `handleEvent` */}
      <hr />
      Click Me
    </button>
  );
};

const MultiButton = () => {
  const handleClickMultiButton = (event) => console.log(event.target.name);

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        gap: "10px",
        padding: "20px",
        backgroundColor: "lightgray",
      }}>
      <button onClick={handleClickMultiButton} name="one">
        One
      </button>
      <button onClick={handleClickMultiButton} name="two">
        Two
      </button>
      <button onClick={handleClickMultiButton} name="three">
        Three
      </button>
    </div>
  );
};

const InteractiveWelcome = () => {
  const [nameData, setNameData] = useState({
    username: "",
  });

  const handleInputOnChange = (event) => {
    setNameData({
      ...nameData,
      username: event.target.value,
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "flex-start",
        gap: "10px",
      }}>
      <label htmlFor="01-name">Section of Name</label>
      <input
        id="01-name"
        value={nameData.username}
        type="textarea"
        onChange={handleInputOnChange}
        placeholder="Enter name"></input>
      {/* <pre>{JSON.stringify(nameData, null, 2)}</pre> */}
      <Welcome name={nameData.username} />
    </div>
  );
};

function OnLogin() {
  return (
    <div>
      <h2>Controlled-Form of log in session</h2>
      <Login onLogin={OnLogin} />
    </div>
  );
}

const Login = ({ onLogin }) => {
  const [nameData, setNameData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    // para evitar que se salven espacios equivocados debido a un mal typing por parte de los usuarios, se utiliza el .trim()
    nameData.username.trim() !== "" && nameData.password.trim() !== ""
      ? setIsDisabled(false)
      : setIsDisabled(true);
  }, [setIsDisabled, nameData]);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? setNameData({ ...nameData, [name]: checked })
      : setNameData({ ...nameData, [name]: value });
  };

  const handleResetForm = () => {
    setNameData({ username: "", password: "", remember: false });
  };

  const handleSendData = (event) => {
    /* impedimos que la página se vuelva a cargar una vez que apretamos el botón `Submit` */
    event.preventDefault();
    console.log("You are logged with:", nameData);
    /* Chiama la funzione di login passando i dati del modulo */
    {
      onLogin;
    }
  };

  return (
    <form
      onSubmit={handleSendData}
      style={{
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "flex-start",
        gap: "15px",
      }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="01-login">Username:</label>
        <input
          id="01-login"
          name="username"
          value={nameData.username}
          type="text"
          onChange={handleInputChange}
          placeholder="Enter name"
          required></input>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="02-login">Password:</label>
        <input
          id="02-login"
          name="password"
          value={nameData.password}
          type="password"
          onChange={handleInputChange}
          placeholder="Enter password"
          required></input>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "125px",
        }}>
        <label htmlFor="02-login">
          <small>Stay Logged?</small>
        </label>
        <input
          id="03-login"
          name="remember"
          value={nameData.remember}
          type="checkbox"
          onChange={handleInputChange}></input>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "125px",
        }}>
        <button
          id="04-login"
          name="send-data"
          type="submit"
          onClick={handleSendData}
          disabled={isDisabled}>
          Submit
        </button>
        <button
          id="05-login"
          name="send-data"
          type="reset"
          onClick={handleResetForm}>
          Reset
        </button>
      </div>
      <pre>{JSON.stringify(nameData, null, 2)}</pre>
    </form>
  );
};

const UncontrolledLogin = () => {
  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    /*  const userID = event.target.elements.namedItem("userID").value;
    const passID = event.target.elements.namedItem("passID").value;
    const session = event.target.elements.namedItem("session").checked; */

    const formData = new FormData(event.target)

    const data = {
      userID: formData.get("userID"),
      passID: formData.get("passID"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Uncontrolled-Form of log in session</h2>
      <input id="01" name="userID" type="text"></input>
      <input id="02" name="passID" type="password"></input>
      <input name="session" type="checkbox"></input>
      <button type="submit">Login here</button>
      <button type="reset">Reset</button>
    </form>
  );
};
