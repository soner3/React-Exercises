import React from "react";

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
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}, "We're currently open"
    </footer>
  );
}

export default Footer;
