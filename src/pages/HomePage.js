import MovieCard from "feature/home/components/PersonCard";
import { Card } from "react-bootstrap";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";

const HomePage = () => {
  const { state } = useGlobalState();

  return (
    <>
    <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap"}}>


    
    <div className="d-flex gap-4 flex-wrap py-5">
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        height={300}
        style={{ objectFit: "cover" }}
        src="https://i.pinimg.com/originals/6d/e8/ad/6de8ad5eca1b8686e9ca946545194062.jpg"
      />
      <Card.Body>
        <Card.Title>John </Card.Title>
        <Card.Title> Doe</Card.Title>
        <Card.Text>johndoe@gmail.com</Card.Text>
        <Card.Text>LoremLorem</Card.Text>
        
      </Card.Body>
    </Card>
      {state.people?.map((person, index) => (
        <MovieCard key={"person" + index} {...person} />
        ))}
    </div>
    </div>
        </>
    
  );
};

export default HomePage;
