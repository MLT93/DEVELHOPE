import { useFetch } from "../CustomHooks/Fetch/useFetch";
import { Card, ListGroup, ListGroupItem, CardImg } from "react-bootstrap";

export const PruebaCustomHook = () => {
  const { data } = useFetch(
    "https://random-data-api.com/api/users/random_user?size=4",
  );

  data.filter((element) => {
    return element.password;
  });

  console.log(data);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {data.map((element, index) => {
          return (
            <div key={index}>
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
            </div>
          );
        })}
      </div>
    </>
  );
};
