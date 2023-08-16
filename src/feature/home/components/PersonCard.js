import Card from "react-bootstrap/Card";


function MovieCard({
  FirstName = "FirstName",
  LastName = "LastName",
  Biography = "Biography",
  Email="Email",
  Poster = "https://i.pinimg.com/236x/ff/d9/35/ffd935e2c78ccd99b1086f58b8ba9142.jpg",
 
}) {
  

  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        height={300}
        style={{ objectFit: "cover" }}
        src={Poster}
      />
      <Card.Body>
        <Card.Title>{FirstName }</Card.Title>
        <Card.Title>{LastName}</Card.Title>
        <Card.Text>{Email}</Card.Text>
        <Card.Text>{Biography}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
