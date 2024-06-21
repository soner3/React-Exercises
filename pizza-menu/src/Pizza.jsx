function Pizza({ pizza }) {
  console.log(pizza);

  // if (pizza.soldOut) {
  //   return null;
  // }

  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        {/* {pizza.soldOut ? <span>SOLD OUT</span> : <span>{pizza.price}</span>} */}
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}
export default Pizza;
