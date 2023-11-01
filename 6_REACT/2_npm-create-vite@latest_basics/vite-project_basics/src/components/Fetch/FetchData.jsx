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
