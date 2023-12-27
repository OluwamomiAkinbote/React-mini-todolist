import React from "react";

function ShowMessage() {
  const message = "OLUWAMOMI";
  return <div>{<h3>{message !== "" ? message : " GOOD AFTERNOON"}</h3>}</div>;
}

export default ShowMessage;
