import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    (async (url) => {
      try {
        const response = await fetch(url);

        console.log(`useFetch response = ${response}`);

        const data = await response.json();

        console.log(`useFetch data = ${data}`);

        setData(data);
        setError(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    })(url);
  }, [url]);

  return [ data, isPending, error ];
};
