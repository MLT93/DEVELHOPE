import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async (url) => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw {
            error: true,
            status: response.status,
            statusText: !response.statusText
              ? "Ocurrió un error"
              : response.statusText,
          };
        }

        console.log(`useFetch response = ${response}`);

        const data = await response.json();

        console.log(`useFetch data = ${data}`);

        setIsPending(false);
        setData(data);
        setError({ error: false });
      } catch (error) {
        setIsPending(true);
        setError(error);
      }
    })(url);
  }, [url]);

  return { data, isPending, error };
};
