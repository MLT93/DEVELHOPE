/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { TresEnRaya } from "./components/TresEnRaya/TresEnRaya.jsx";
import { Prueba } from "./components/prueba-tecnica/Prueba-tecnica.jsx";

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
        <hr />
        <FocusableInput />
        <hr />
        <ArrayComponent array={users} />
        <hr />
        <ArrComponent arr={users} />
        <hr />
        {dataArray &&
          dataArray.map((card, index) => {
            return (
              <Card
                key={index}
                username={card.username}
                id={card.id}
                name={card.name}
                lastName={card.lastName}
                avatar={card.avatar}
              />
            );
          })}
        <hr />
        <MyToDoComponent arr={toDoList} />
        <hr />
        <Prueba />
        <hr />
        <TresEnRaya />
      </div>
    </div>
  );
}

const Hello = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>
        Hello, World!
        <hr />
        <Message />
      </h2>
    </div>
  );
};

const Message = () => {
  return (
    <div style={{ padding: "20px" }}>
      <p>What a beautiful day!</p>
    </div>
  );
};

const Welcome = ({ name, age }) => {
  return (
    <div style={{ padding: "20px" }}>
      <p>Welcome, {name}</p>
      <Age age={age && age} />
    </div>
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
    <div style={{ padding: "20px" }}>
      <p>
        <button onClick={handleClick}>See current Date</button>
      </p>
    </div>
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
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <CounterDisplay counter={counter} />
      <div style={{ display: "flex", gap: "5px" }}>
        <button onClick={amount}>Amount Counter by {incrementAmount}</button>
        <button onClick={decrement}>
          Decrement Counter by {decrementAmount}
        </button>
        <button onClick={reset}>Reset Counter</button>
      </div>
    </div>
  );
};

const CounterDisplay = ({ counter }) => {
  const prevCounterRef = useRef(null);

  //En este código, estamos utilizando prevCounterRef para mantener el valor anterior del contador. En el efecto, comparamos el valor actual del contador con el valor anterior para determinar la dirección del cambio. Luego, actualizamos prevCounterRef.current con el valor actual del contador para que esté listo para la próxima actualización.
  useEffect(() => {
    // Comprueba primero si hay algún valor
    if (prevCounterRef.current !== null) {
      // Si hay valor, entonces hace las comparaciones teniendo como punto de referencia el valor de la Refs
      if (counter > prevCounterRef.current) {
        console.log("up");
      } else if (counter < prevCounterRef.current) {
        console.log("down");
      }
    }

    // Se actualiza la referencia después de las comparaciones para asegurarse de que siempre se actualice al valor más reciente para compararse con el valor del próximo renderizado
    prevCounterRef.current = counter;
  }, [counter]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 ref={prevCounterRef} id="current-value">
        Counter =&gt; {counter}
      </h2>
    </div>
  );
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
    <div style={{ padding: "20px" }}>
      <h2>{currentTimeFormatted}</h2>
    </div>
  );
};

const MouseClicker = () => {
  const handleClickButton = (event) => console.log(event.target.name);
  const handleClickImg = (event) => console.log(event.src);

  return (
    <div style={{ padding: "20px" }}>
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
    </div>
  );
};

const MultiButton = () => {
  const handleClickMultiButton = (event) => console.log(event.target.name);

  return (
    <div style={{ padding: "20px" }}>
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
        padding: "24px",
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
    <div style={{ padding: "20px" }}>
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

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form
      onSubmit={handleSendData}
      style={{
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "flex-start",
        gap: "15px",
        padding: "24px",
      }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="01-login">Username:</label>
        <input
          id="01-login"
          name="username"
          ref={inputRef}
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

    /* Esta es la API DOM para acceder a los datos del formulario. Ideal para trabajar formularios simples. */
    /* const userID = event.target.elements.namedItem("userID").value;
    const passID = event.target.elements.namedItem("passID").value;
    const session = event.target.elements.namedItem("session").checked;
    
    const data = {
      userID,
      passID,
      session,
    }; */

    /* Esta es la API FormData para acceder a los datos del formulario. Ideal para trabajar formularios complejos. */
    const formData = new FormData(event.target);

    const data = {
      userID: formData.get("userID"),
      passID: formData.get("passID"),
      session: formData.get("session") === "on" ? true : false,
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ padding: "20px" }}>
      <h2>Uncontrolled-Form of log in session</h2>
      <div style={{ display: "flex", gap: "5px" }}>
        <input id="01" name="userID" type="text"></input>
        <input id="02" name="passID" type="password"></input>
        <input name="session" type="checkbox"></input>
        <button type="submit">Login</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
};

const FocusableInput = () => {
  const inputFocusRef = useRef(null);

  // Inicializo en falso
  var isMounted = useRef(false);

  useEffect(() => {
    inputFocusRef.current?.focus();

    // Compruebo si el componente está montado por primera vez
    if (!isMounted.current) {
      console.log("Mounted first time");
      isMounted.current = true;
    }

    return () => {
      console.log("Mounted another time");
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Input Focus Ref</h2>
      <input
        ref={inputFocusRef}
        name="username"
        type="text"
        placeholder="Name"></input>
    </div>
  );
};

const dataArray = [
  {
    id: "001",
    name: "Marcos",
    lastName: "Lambir Torres",
    username: "Mquitox23",
    avatar:
      "https://4.bp.blogspot.com/-tAYXmWGcTYE/V_UUBGq-7SI/AAAAAAAAGRc/20SEZJOAtt8wa5krzqSqUlGOLzNvnb47ACPcB/s640/EMPANADAS%2BCRIOLLAS%2BARGENTINAS%2B%25281.%2529.jpg",
  },
];

const users = [
  {
    id: "01",
    name: "John",
    bgColor: "green",
  },
  {
    id: "02",
    name: "Mary",
    bgColor: "#ab4100",
  },
  {
    id: "03",
    name: "Jason",
    bgColor: "coral",
  },
  {
    id: "04",
    name: "Berry",
    bgColor: "gray",
  },
];

const Colors = ({ id, name, color }) => {
  return <Color id={id} name={name} color={color} />;
};

export const Color = ({ id, name, color }) => {
  return (
    <li id={id} style={{ backgroundColor: `${color}` }}>
      {name}
    </li>
  );
};

const ArrayComponent = ({ array }) => {
  return (
    <div style={{ padding: "20px" }}>
      <ul>
        {array &&
          array.map((card) => {
            return (
              <Colors
                id={card.id}
                key={card.id}
                name={card.name}
                color={card.bgColor}
              />
            );
          })}
      </ul>
    </div>
  );
};

const ArrComponent = ({ arr }) => {
  return (
    <div style={{ padding: "20px" }}>
      <ul>
        {arr &&
          arr.map((element, index) => {
            return (
              <li id={element.id} key={index}>
                {element.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const Card = ({ username, id, name, lastName, avatar }) => {
  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "flex-start",
          alignItems: "center",
          textAlign: "center",
          border: "1.5px solid black",
          borderRadius: "10px",
          backgroundColor: "lightgrey",
          overflow: "hidden",
          width: "290px",
          height: "auto",
          padding: "5px",
          color: "black",
        }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}>
          <span>{`${id}`}</span>
        </div>
        <h2 style={{ margin: "10px" }}>{`# ${username}`} </h2>
        <img
          src={`${avatar}`}
          alt="User avatar"
          style={{
            border: "1.5px solid black",
            borderRadius: "10px",
            width: "95%",
            height: "230px",
          }}
        />
        <h4
          style={{
            whiteSpace: "pre-line",
            marginTop: "5px",
          }}>{`${name} ${lastName}
        
        Is the best student
        
        Increment his superpower
        up tu 5 points every Empanada ate`}</h4>
      </div>
    </div>
  );
};

const toDoList = [
  {
    id: 1,
    task: "Hacer la compra",
    completed: false,
  },
  {
    id: 2,
    task: "Estudiar para el examen",
    completed: true,
  },
  {
    id: 3,
    task: "Llamar al médico",
    completed: false,
  },
  {
    id: 4,
    task: "Hacer ejercicio",
    completed: false,
  },
];

const MyToDoComponent = ({ arr }) => {
  const [task, setNewTask] = useState("");

  // Recibe el valor del <input> y lo guarda en `task` una vez que acaba de escribir el usuario
  const handleInputChange = (event) => {
    console.log(event.target.value);

    setNewTask(event.target.value);
  };

  // Cuando mapea, recibe el índice del array y crea otro array nuevo con los valores actualizados
  const newIndex = arr.length;
  const newArr = [...arr, { id: newIndex, task: task, completed: false }];

  const handleClickNewTask = (e) => {
    console.log(task);

    task.trim() !== "" ? console.log(newArr) : null;

    if (document) {
      const resetInput = (document.getElementById("input-task").value = "");

      e.target = resetInput;
    }
  };

  const handleResetArray = (e) => {
    task.trim() !== "" ? console.log(newArr) : null;

    // .splice(indexStart, AmountItemsDelete, ItemAdd)
    e.target = newArr.splice(newArr.length -1, newArr.length);
  };

  return (
    <div style={{ padding: "20px" }}>
      <ul
        style={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "space-around",
          alignItems: "flex-start",
          width: "100%",
          whiteSpace: "pre-line",
          gap: "25px",
        }}>
        {arr &&
          arr.map((element, index) => {
            return (
              <div key={index}>
                <li
                  id={element.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "auto",
                    gap: "10px",
                  }}>
                  {`ID => ${element.id}
                Task => ${element.task}
                Is completed? => ${element.completed}`}
                  <div style={{ display: "flex", gap: "5px" }}>
                    <input
                      id="input-task"
                      type="text"
                      onChange={handleInputChange}
                    />
                    <button type="submit" onClick={handleClickNewTask}>
                      Add Task
                    </button>
                    <button type="submit" onClick={handleResetArray}>
                      Reset Array
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
};
