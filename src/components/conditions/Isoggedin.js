import React from "react";

function Isoggedin() {
  const isLoggedIn = false;
  return (
    <div>
      <h1>Hi! This Oluwamomi Akinbote</h1>
      <h3>{isLoggedIn ? "Good afternoon" : "good morning"}</h3>
    </div>
  );
}

export default Isoggedin;
