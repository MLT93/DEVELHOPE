import "./App.css";
import { HelloWorld, NameArgument, Sum } from "./components/jsx.js";

function App() {
  const name = "Marcos";
  let a = 0.84;
  let b = 20;

  return (
    <div className="App">
      <div className="JSX">
        <div name="Exercise 1">
          <span>Exercise 1:</span>
          <p>
            Let's start with a new project and modify the app.js file. Create a
            variable called hello and initialize it with an h1 tag with the
            message "Hello, World!".
          </p>
          <div>
            <div className="exercise-style">
              <HelloWorld />
            </div>
          </div>
        </div>
        <br />
        <div name="Exercise 2">
          <span>Exercise 2:</span>
          <p>
            Write a function that receives a name argument and returns a h1 tag
            with the name variable appended to the "Hello, " string.
          </p>
          <div>
            <div className="exercise-style">
              <NameArgument name={name} />
            </div>
          </div>
        </div>
        <br />
        <div name="Exercise 3">
          <span>Exercise 3:</span>
          <p>
            What happens if the name variable is not passed to the function?
          </p>
          <div>
            <div className="exercise-style">
              Si no se pasa la variable a la función, esta devuelve unicamente
              "Hello, " produciendo un Warning, porque la función no recibe el
              parámetro para el cual está diseñada.
            </div>
          </div>
        </div>
        <br />
        <div name="Exercise 4">
          <span>Exercise 4:</span>
          <p>
            What happens if the name variable contains a JSX expression instead
            of a string?
          </p>
          <div>
            <div className="exercise-style">
              Devuelve un error porque si yo tuviera un elemento JSX completo
              como &lt;h1&gt;Marcos&lt;/h1&gt;, React me da un error porque
              dentro de las llaves debería pasarle unicamente elementos de
              JavaScript.
            </div>
          </div>
        </div>
        <br />
        <div name="Exercise 5">
          <span>Exercise 5:</span>
          <p>
            Write a function that receives two parameters, a and b and returns
            the sum of them within an h2 tag.
          </p>
          <div>
            <div className="exercise-style">
              {Sum(a, b)}
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default App;
