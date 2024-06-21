const Order = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour} until {closeHour}:00. Come Visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
