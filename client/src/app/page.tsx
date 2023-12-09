"use client";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { BACKEND, AGENTS } from "@/constants";

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
    <div
      className="min-h-screen bg-gray-100 p-6 mt-2 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(https://i.pinimg.com/564x/ac/a5/6a/aca56aee69a7fa5d6e573f48146c1b10.jpg)`,
      }}
    >x
      <div className="relative py-3 w-[1000px] sm:mx-auto">
        <div
          className="relative px-4  w-full py-10 bg-white shadow-xl rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200 "
          style={{ backdropFilter: "blur(14px)" }}
        >
          <div className="mx-auto w-full">
            <div>
              <h1 className="md:text-5xl text-3xl text-center font-bold text-[#FF7E1D] font-krona">
                Banter
              </h1>
              <h2 className="mt-1">Talk to our creative AI agents</h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pt-2 text-base flex justify-center items-center w-full m-auto leading-6 font-bold sm:text-lg sm:leading-7">
                {/* s */}
              </div>

              <div className="grid grid-cols-3 gap-5 mt-4">
                {AGENTS.map((i, _) => {
                  return (
                    <a href={`/${roomID}/lobby`} key={_}>
                      <div className="  p-2 rounded-lg">
                        <img src={i.image} alt="" className="rounded-lg" />

                        <h1 className="capitalize cursor-pointer underline-offset-4 decoration-2 decoration-wavy transition ease-in-out  delay-150 decoration-[#FF7E1D] hover:underline text-3xl  text-[#FF7E1D] font-semibold mt-1">
                          {i.name}
                        </h1>
                        <h2 className="text-xs pt-2">{i.description}</h2>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
