function CardBody(props) {
  return (
    <div className="font-sans font-medium text-center p-4">
      <h1 className="p-4 text-3xl">{props.name}</h1>
      <p>{props.notes}</p>
    </div>
  );
}

export default CardBody;
