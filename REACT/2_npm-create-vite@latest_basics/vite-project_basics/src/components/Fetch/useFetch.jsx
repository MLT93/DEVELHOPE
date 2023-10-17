import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async (url) => {
      try {
        const response = await fetch(url);

        console.log(`useFetch response = ${response}`);

        const data = await response.json();

        console.log(`useFetch data = ${data}`);

        setData(data);
        setError(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    })(url);
  }, [url]);

  return { data, isPending, error };
};
