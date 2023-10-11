import { useEffect, useState } from "react";

export const Prueba = () => {
  const [state, setState] = useState("lorem ipusm");
  const [imageState, setImageState] = useState("image cat");
  const [error, setError] = useState(null)
  const urlFact = `https://catfact.ninja/fact`;
  const urlImage = `https://api.thecatapi.com/v1/images/search?limit=10&rand`;

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(urlFact);

        // Manejo error de respuesta del servidor
        if (!response.ok) {
          throw new Error(
            `La respuesta no ha encontrado resultado: (response = ${response.ok})`,
          );
        }

        // TODO: utilizar un useState para manejar el error de la petición y no solo el de la respuesta

        // ...

        console.log(response);

        const data = await response.json();

        console.log(data);

        setState(data.fact);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [urlFact]);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(urlImage);

        if (!response.ok) {
          throw new Error(
            `La respuesta no ha encontrado resultado: (response = ${response.ok})`,
          );
        }

        console.log(response);

        const data = await response.json();

        const imageUrl = data.map((url) => {
          return url.url;
        });

        // .splice(start, delete, add)
        imageUrl.splice(0, 9);

        console.log(imageUrl);

        setImageState(imageUrl);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [urlFact, urlImage]);

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          placeItems: "center",
          width: "290px",
          height: "auto",
          border: "1.5px solid black",
          borderRadius: "10px",
          padding: "10px",
          backgroundColor: 'lightcyan',
        }}>
        <img
          src={imageState}
          alt={`Image given of ${urlImage}`}
          style={{
            width: "98.5%",
            height: "250px",
            border: "1px solid black",
            borderRadius: "10px",
          }}
        />
        <div>
          <h4>Information:</h4>
          <p>{state && state}</p>
        </div>
      </div>
    </main>
  );
};
