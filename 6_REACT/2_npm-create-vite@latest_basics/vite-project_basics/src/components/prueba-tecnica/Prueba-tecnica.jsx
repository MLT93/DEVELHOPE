import { useEffect, useState } from "react";

export const Prueba = () => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState("lorem ipusm");
  const [imageState, setImageState] = useState("image cat");
  const [error, setError] = useState(null);
  const urlFact = `https://catfact.ninja/fact`;
  const urlImage = `https://api.thecatapi.com/v1/images/search?limit=10&rand`;

  useEffect(() => {
    setIsPending(true);
    (async () => {
      try {
        let response = await fetch(urlFact);

        // Manejo error de respuesta del servidor
        if (!response.ok) {
          throw new Error(
            `Ocurrió un error. Response: ${response.ok}, Status: ${response.status}, StatusText: ${response.statusText}`,
          );
        }

        console.log(`Response: ${response.status}`);

        const data = await response.json();

        console.log(data);

        setData(data.fact);
      } catch (error) {
        setError(error.message);
        if (error instanceof SyntaxError) {
          console.error(`Error de sintaxis: ${error.message}`);
        }
        if (error instanceof TypeError) {
          console.error(`Error de tipo: ${error.message}`);
        }
      } finally {
        setIsPending(false);
      }
    })();
  }, [urlFact]);

  useEffect(() => {
    setIsPending(true);
    try {
      (async () => {
        const response = await fetch(urlImage);

        if (!response.ok) {
          throw new Error(
            `Ocurrió un error. Response: ${response.ok}, Status: ${response.status}, StatusText: ${response.statusText}`,
          );
        }

        const data = await response.json();

        const imageUrl = data.map((url) => {
          return url.url;
        });

        // .splice(start, delete, add)
        imageUrl.splice(0, 9);

        setImageState(imageUrl);
      })();
    } catch (error) {
      console.error(error.message);
      setError(error)
    } finally {
      setIsPending(false);
    }
  }, [urlFact, urlImage]);

  return (
    <>
      {isPending && <h2>Is Loading...</h2>}
      <main style={{ padding: "20px" }}>
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
            backgroundColor: "lightcyan",
            color: "black",
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
            <p>{data && data}</p>
          </div>
          {error && <h2>{error}</h2>}
        </div>
      </main>
    </>
  );
};
