import axios from "axios";

export const FetchData = (url, setData, setIsPending, setError) => {
  setIsPending(true);
  axios
    .get(url)
    .then((response) => setData(response.data))
    .catch((err) => {
      setError(err.message);
    })
    .finally(() => setIsPending(false));
};


/* VERSIÓN TIPADA PARA TYPESCRIPT */
/* 
    import axios from "axios";
    import { Dispatch, SetStateAction } from "react";

    export const fetchData = (
      url: string,
      setData: Dispatch<SetStateAction<any>>,
      setIsPending: Dispatch<SetStateAction<boolean>>,
      setError: Dispatch<SetStateAction<string | null>>,
    ): void => {
      setIsPending(true);
      axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => setIsPending(false));
    };
*/


/* FORMA DE USO */
/* 
    import React, { useState, useEffect } from "react";
    import { fetchData } from "./fetchData"; // Asegúrate de ajustar la ruta según sea necesario

    const MyComponent: React.FC = () => {
      const [data, setData] = useState<any>(null);
      const [isPending, setIsPending] = useState<boolean>(false);
      const [error, setError] = useState<string | null>(null);

      useEffect(() => {
        const url = "https://api.example.com/data"; // Cambia la URL según sea necesario
        fetchData(url, setData, setIsPending, setError);
      }, []);

      if (isPending) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;

      return (
        <div>
          <h1>Data:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      );
    };

    export default MyComponent;
*/
