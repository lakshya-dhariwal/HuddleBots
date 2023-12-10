"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { BACKEND, AGENTS } from "@/constants";
import Card from "@/components/common/Card";

function Home() {
  const [roomID, setRoomID] = useState<string | null>(null);

  const getAiRoom = async () => {
    const data = await axios.get(BACKEND + "/ai-client-room");
    setRoomID(data.data.roomid);
  };
  useEffect(() => {
    getAiRoom();
  }, []);

  return (
    <div className="  text-white h-[80vh]  flex flex-col max-w-[1000px] pt-[10rem] mx-auto sm:py-12">
      <h1 className="text">AI Bots Support on Huddle01</h1>
      <h2>
        Simple natural language command based bots with multi case utility
      </h2>
    </div>
  );
}

export default Home;
