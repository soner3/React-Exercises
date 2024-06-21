function CardHeader(props) {
  console.log(props);
  return (
    <div className="flex items-center justify-center">
      <img
        src={props.images}
        alt="Profilbild"
        className=" object-cover w-full h-full rounded-t-xl"
      />
    </div>
  );
}

export default CardHeader;
