const Skill = (props) => {
  console.log(props);
  return (
    <div className="rounded-2xl bg-purple-600 text-center m-2">
      {props.skill}
    </div>
  );
};

export default Skill;
