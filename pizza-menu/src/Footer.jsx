import React from "react";
import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("Currently Open");
  // } else {
  //   alert("Sorry Were Closed");
  // }
  // console.log(hour);

  if (!isOpen) {
    return (
      <p>
        We're happy to welcome you between {openHour}:00 - {closeHour}:00
      </p>
    );
  }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 - {closeHour}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;
