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
    <div className="min-h-screen bg-[#0B0E10] p-6 mt-2 flex flex-col justify-center sm:py-12">
      <div className="mt-5">
    
       
      </div>
    </div>
  );
}

export default Home;
