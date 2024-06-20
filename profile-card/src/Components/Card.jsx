import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

function Card() {
  return (
    <div className="rounded-2xl  border-black border-4 shadow-2xl flex flex-col w-1/3">
      <CardHeader images="/65646572251.jpg" />
      <CardBody name="Max Mustermann" notes="rthbkjrjthnngowrtnboirnn" />
      <CardFooter
        skills={["HTML +CSS", "JavaScript", "React", "Python", "Java"]}
      />
    </div>
  );
}

export default Card;
