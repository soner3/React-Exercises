import Skill from "./Skill";

function CardFooter(props) {
  console.log(props);
  return (
    <div>
      {props.skills.map((el, index) => {
        return <Skill key={index} skill={el} />;
      })}
    </div>
  );
}

export default CardFooter;
