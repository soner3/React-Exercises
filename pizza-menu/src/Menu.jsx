import Pizza from "./Pizza";

function Menu() {
  return (
    <div className="menu">
      <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, Spinach, Mozerella"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />
    </div>
  );
}
export default Menu;
