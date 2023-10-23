import { useFetch } from "../Fetch/useFetch";
import { Card, ListGroup, ListGroupItem, CardImg } from "react-bootstrap";

const url = "https://random-data-api.com/api/users/random_user?size=5";

export const PruebaCustomHook = () => {
  const [data, error, isPending] = useFetch(url);

  console.log(data);

  return (
    <>
      {isPending && <h2>Loading...</h2>}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {data.map((element, index) => {
          return (
            <div key={index}>
              {!isPending && (
                <Card style={{ width: "20rem" }}>
                  <Card.Header style={{ fontSize: "30px", color: "#ff7e00" }}>
                    {element.username}
                  </Card.Header>
                  <CardImg
                    variant="top"
                    src={element.avatar}
                    alt={`avatar ${element.id}`}
                  />
                  <ListGroup variant="flush">
                    <ListGroupItem>
                      <b>ID:</b> {element.id}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Employ:</b> {element.employment.title}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Plan:</b> {element.subscription.plan}
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              )}
            </div>
          );
        })}
      </div>
      {error && <h2>{error}</h2>}
    </>
  );
};
