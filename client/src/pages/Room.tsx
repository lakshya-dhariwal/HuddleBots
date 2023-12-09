import React from "react";
import { useParams } from "wouter";

function Room() {
  const params = useParams();
  return <div>Room : {params.id}</div>;
}

export default Room;
