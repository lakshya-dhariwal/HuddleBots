"use client";
import React, { useEffect, useState } from "react";
import "cal-sans";

import axios from "axios";
import { BACKEND, AGENTS } from "@/constants";
import Card from "@/components/common/Card";
import ButtonNew from "../components/ButtonNew";
import Link from "next/link";

function Home() {
  const [roomID, setRoomID] = useState<string | null>(null);
  const createRandomRoom = async () => {
    const res = await fetch("https://api.huddle01.com/api/v1/create-room", {
      method: "POST",
      body: JSON.stringify({
        title: "Test Room",
      }),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY ?? "",
      },
      cache: "no-store",
    });
    const data = await res.json();
    const { roomId } = data.data;
    setRoomID(roomId);
  };
  useEffect(() => {
    createRandomRoom();
  }, []);

  // console.log({ roomId });
  // const getAiRoom = async () => {
  //   const data = await axios.get(BACKEND + "/ai-client-room");
  //   setRoomID(data.data.roomid);
  // };
  // useEffect(() => {
  //   getAiRoom();
  // }, []);

  return (
    <div className="  text-white h-[80vh]  flex flex-col items-center max-w-[1000px] p-24 px-10 pt-10  mx-auto sm:py-12">
      <div className="w-[80vw] cal-font  flex flex-col justify-center items-center my-[5rem]">
        <span className=" text-neutral-800 font-semibold  border-brandGreen bg-blue-600 cursor-pointer rounded-full text-[12px] px-3">
          Simple natural language command based GPT bots
        </span>
        <h1 className="text-[80px] font-semibold text-[#EDEDED] font-cal">
          AI Bots on Huddle01
        </h1>
        <h1 className="text-[#EDEDED]  text-[28px] text-center mt-8 ">
          Improved chat utility using GPT and Voice enabled bots with easy UX
        </h1>{" "}
        <div className="flex justify-around  my-5 flex-row w-[20vw] mx-auto ">
          <Link href={`/${roomID}/lobby`}>
            <ButtonNew type="button" mode="dark">
              <div className="flex flex-row gap-[10px] items-center ">
                <h1 className="text-brandGrey font-semibold ">
                  Join AI enabled Spaces
                </h1>
              </div>
            </ButtonNew>
          </Link>
          <a
            href="https://github.com/lakshya-dhariwal/HuddleBots"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <ButtonNew type="button" mode="dark">
              <div className="flex flex-row gap-[10px] items-center ">
                <h1 className="text-[#EDEDED] font-semibold">Read More</h1>
              </div>
            </ButtonNew>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 max-w-[80vw] gap-[2rem]">
        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">
            AI Dopplegangers
          </h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Talk to your favorites celebrities like Elon Musk , Vitalik Butarin,
            Donald Trump or Snoop Dogg using /name.
          </p>
        </div>

        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4 ">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">
            Simple Utilities
          </h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Use bots for simple utilities inside Huddle chat like /joke, /movies
            suggestion, /code etc to enhance in chat experience.
          </p>
        </div>

        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">
            Advanced Integrations
          </h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Using GPT function calling feature we can create powerful agents
            like calendar scheduler bot, attendance bot by plugging functions
            into gpt and huddle bot infra
          </p>
        </div>

        {/* <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">
            Discover Verifiable Talent
          </h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Easily find skilled individuals with validated capabilities by
            exploring Proof of Work profiles, ensuring a match for your project
            needs.
          </p>
        </div>

        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">
            Sponsor People
          </h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Facilitate direct monetary appreciation for exceptional work by
            enabling users to send tips through Proof of Work profiles.
          </p>
        </div>

        <div className="bg-neutral-800 text-lightBrandGrey border border-zinc-600 rounded-lg p-3 px-4">
          <h1 className="text-[20px] text-brandGreen pb-[5px]">
            Skill Recognition with Karma
          </h1>
          <p className="text-[14px] text-[#EDEDED] roboto font-medium">
            Move beyond traditional credentials with the Karma Engine, where
            community-driven endorsements offer authentic recognition of a
            skills.
          </p>
        </div>*/}
      </div>
    </div>
  );
}

export default Home;
