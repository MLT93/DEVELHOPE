import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    (async (url) => {
      try {
        let response = await fetch(url);

        console.log(`useFetch response = ${response.status}`);

        const data = await response.json();

        console.log(data);

        setData(data);

      } catch (err) {
        setError(err.message);
        console.error(err.message)
      } finally {
        setIsPending(false);
      }
    })(url);
  }, [url]);

  return [data, isPending, error];
};
