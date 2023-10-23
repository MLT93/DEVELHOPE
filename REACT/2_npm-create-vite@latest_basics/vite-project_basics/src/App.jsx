/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, createContext, useContext } from "react";
import { TresEnRaya } from "./components/TresEnRaya/TresEnRaya.jsx";
import { Prueba } from "./components/prueba-tecnica/Prueba-tecnica.jsx";
import styles from "./App.module.scss";
import { Button, Form, Collapse, Card } from "react-bootstrap";
import { Module } from "./components/Module/Module.jsx";
import { Toggle } from "./components/Toggle/Toggle.jsx";
import { PruebaCustomHook } from "./components/PruebaConCustomHook/PruebaCustomHook.jsx";
import { Contenedor } from "./components/Children/ChildrenExample.jsx";
import axios from "axios";

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
              <MyCard
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
        <hr />
        <Button className="m-5">Botón Bootstrap</Button>
        <hr />
        <Container title="Hello Component Collapse">
          <Hello />
        </Container>
        <hr />
        <Module />
        <hr />
        <Toggle />
        <hr />
        <PruebaCustomHook />
        <hr />
        <Contenedor>
          {/* Pasando un componente externo como hijo */}
          <Message />
          {/* Agregando un elemento que recibirá las propiedades del componente padre */}
          <button>Button 1</button>
          <button>Button 2</button>
        </Contenedor>
        <hr />
        <LanguageProvider>
          <LanguageConsumer />
          <Clock />
        </LanguageProvider>
        <hr />
        <GitHubUser username={"MLT93"} />
        <hr />
        <GitHubUsers />
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
    <div className="welcome" style={{ padding: "20px", marginBottom: "5px" }}>
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
    <div style={{ padding: "20px", color: "lightskyblue" }}>
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
  const { language } = useContext(LanguageContext);

  const [currentTimeFormatted, setCurrentTimeFormatted] = useState(
    new Intl.DateTimeFormat("en-GB", {
      timeStyle: "medium",
      timeZone: "Europe/Madrid",
    }).format(new Date()),
  );

  useEffect(() => {
    const intervalID = setInterval(() => {
      const newTime = new Intl.DateTimeFormat("en-GB", {
        timeStyle: "medium",
        timeZone: "Europe/Madrid",
      }).format(new Date());

      setCurrentTimeFormatted(newTime);
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="clock">
      <h2>
        {language && language === "es-ES"
          ? `Hora actual: ${currentTimeFormatted}`
          : `Current time: ${currentTimeFormatted}`}
      </h2>
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

  const handleSubmit = (event) => {
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

  var buttonLogin = document.getElementById("04-login");

  const { password } = nameData;

  if (password) {
    if (password.length < 8) {
      buttonLogin.style.backgroundColor = "#f30000ba";
    } else {
      buttonLogin.style.backgroundColor = "green";
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
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
          onClick={handleSubmit}
          disabled={isDisabled}
          style={{
            color: "white",
            backgroundColor: "#f30000ba",
            padding: "5px",
            borderRadius: "5px",
            border: "0",
            boxShadow: "0px -1px 0px 0px inset lightgray",
          }}>
          Login
        </button>
        <button
          id="05-login"
          name="send-data"
          type="reset"
          onClick={handleResetForm}
          style={{
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            border: "0",
            boxShadow: "0px -1px 0px 0px inset lightgray",
          }}>
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
    <form
      onSubmit={handleFormSubmit}
      style={{ padding: "20px" }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-justify">
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
      <Form style={{ height: "200px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="mb-3">Name:</Form.Label>
          <Form.Control
            ref={inputFocusRef}
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
      </Form>
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

const MyCard = ({ username, id, name, lastName, avatar }) => {
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
    e.target = newArr.splice(newArr.length - 1, newArr.length);
  };

  return (
    <div className={styles.MyToDoComponent}>
      <ul>
        {arr &&
          arr.map((element, index) => {
            return (
              <div key={index}>
                <li id={element.id}>
                  {`ID => ${element.id}
                Task => ${element.task}
                Is completed? => ${element.completed}`}
                  <div>
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

const Container = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ color: "black", minHeight: "150px", height: "430px" }}
      className="bg-white border-2 border-red-500 p-5 container">
      <Button
        aria-expanded={open}
        aria-controls="collapse-text"
        onClick={() => setOpen(!open)}
        variant="dark"
        className="mb-3 ml-3 w-4">
        {title}
      </Button>
      <Collapse in={open} dimension="width">
        <div id="collapse-text">
          <Card body style={{ width: "400px" }}>
            {children}
          </Card>
        </div>
      </Collapse>
    </div>
  );
};

export const LanguageContext = createContext("en-GB");

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en-GB");

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexFlow: "column wrap",
        alignItems: "flex-start",
        gap: "10px",
      }}>
      {/* <LanguageContext.Provider value={{ language, changeLanguage }}> */}
      {children}
      {/* </LanguageContext.Provider> */}
    </div>
  );
};

/* Si removemos el `.Provider`, se acciona el valor por defecto del `createContext()` porque no hay ningún componente proveedor de contextos */

export const LanguageConsumer = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <>
      <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
        <option value={"en-GB"}>English</option>
        <option value={"es-ES"}>Spanish</option>
      </select>
    </>
  );
};

export const GitHubUser = ({ username }) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => setData(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsPending(false));
  }, [username]);

  return (
    <>
      {isPending && <h2>Is Loading...</h2>}
      {data && (
        <div
          style={{
            width: "300px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}>
          <div>{data.name}</div>
          <img
            src={data.avatar_url}
            alt={`Avatar of ${data.id}`}
            style={{ width: "100%", height: "auto" }}
          />
          <span>{data.login}</span>
        </div>
      )}
      {error && <h2>{error}</h2>}
    </>
  );
};

export const GitHubUsers = () => {
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [selectUser, setSelectUser] = useState(null);
  const url = "https://api.github.com/users?per_page=4";

  useEffect(() => {
    setIsPending(true);
    (() => {
      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((err) => setError(err.message))
        .finally(() => setIsPending(false));
    })();
  }, []);

  const handleClickUser = (username) => {
    setSelectUser(username);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-start",
          alginItems: "center",
          padding: "20px",
          height: "470px",
        }}>
        {isPending && <h2>Is Loading...</h2>}
        <div>
          {data &&
            data.map((element, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleClickUser(element.login)}
                  style={{
                    width: "150px",
                    padding: "10px",
                  }}>
                  <span>{element.login}</span>
                </button>
              );
            })}
          {selectUser && <GitHubUser username={selectUser} />}
        </div>
        {error && <h2>{error}</h2>}
      </div>
    </>
  );
};

export const useCounter = (startValue) => {
  const [counter, setCounter] = useState((startValue = 0));

  const handleCounterIncrement = () => setCounter(counter + 1);
  const handleCounterDecrement = () => setCounter(counter - 1);
  const handleCounterReset = () => setCounter(startValue);

  return {
    counter: counter,
    incrementFunction: handleCounterIncrement,
    decrementFunction: handleCounterDecrement,
    resetFunction: handleCounterReset,
  };
};

export const useForm = (startValue) => {
  const [value, setValue] = useState(startValue);

  const handleChangeInput = (e) => setValue(e.target.value);

  return {
    value: value,
    inputValueFunction: handleChangeInput,
  };
};

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async (url) => {
      try {
        let response = await fetch(url);
        console.log(`Response: ${response.status}`)
        const data = await response.json();
        console.log(`Data received: ${data}`)
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })(url);
  }, [url]);

  return [data, loading, error];
};
