import React from "react";

interface Props {
  image: string;
  botName: string;
  desc: string;
  type: "AI" | "Utility" | "Custom";
}

export default function Card({ image, botName, desc, type }: Props) {
  return (
    <div className="bg-[#14181C] flex items-center flex-col gap-3 text-gray-300 border border-[#2b353fa8] rounded-xl w-[300px] h-[200px] p-2">
      <img src={image} className="rounded-xl aspect-video " />
      <div className="flex justify-between">
        {" "}
        <h2 className="text-2xl">{botName}</h2>
        <p>{desc}</p>
        <h2>{type}</h2>
      </div>
    </div>
  );
}
