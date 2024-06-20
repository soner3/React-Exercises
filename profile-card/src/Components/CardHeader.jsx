function CardHeader(props) {
  console.log(props);
  return (
    <div className="flex items-center justify-center">
      <img
        src={props.images}
        alt="Profilbild"
        className="rounded-t-2xl object-cover w-full"
      />
    </div>
  );
}

export default CardHeader;
