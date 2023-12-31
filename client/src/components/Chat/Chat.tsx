"use client";
import React from "react";
import useChatScroll from "./ChatScroll";
import { nanoid } from "nanoid";
import useStore from "@/store/slices";
import { useState, useRef } from "react";
import { BasicIcons } from "@/assets/BasicIcons";
import { useDataMessage } from "@huddle01/react/hooks";
import Header from "../Sidebar/Header/Header";
import { BACKEND } from "@/constants";
import axios from "axios";
import { botHandler } from "@/bot";
import Button from "../common/Button";
import { VOICE_IDS, platTTS } from "@/bot/tts";
import AudioStream from "../VoiceStream/VoiceStream";

const Chat = () => {
  const userDisplayName = useStore((state) => state.userDisplayName);
  const [message, setMessage] = useState<string>("");
  const addChatMessage = useStore((state) => state.addChatMessage);
  const chatMessages = useStore((state) => state.chatMessages);
  const ref = useChatScroll(chatMessages);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { sendData } = useDataMessage();
  const setIsChatOpen = useStore((state) => state.setIsChatOpen);

  async function handleSend() {
    sendDataToAllPeers();
    const newChatMessage = {
      name: userDisplayName,
      text: message,
      is_user: true,
    };
    addChatMessage(newChatMessage);
    setMessage("");
    if (newChatMessage.text.charAt(0) === "/") {
      const res = await botHandler(newChatMessage.text);
      console.log({ res });
      if (res?.reply) {
        addChatMessage({ is_user: false, name: res.name, text: res.reply });
      }
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      buttonRef.current?.click();
    }
  };

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessage(event.target.value);
  }

  const sendDataToAllPeers = () => {
    sendData({
      to: "*",
      payload: JSON.stringify({ message: message, name: userDisplayName }),
      label: "chat",
    });
  };

  const displayChats = chatMessages.map((chat) => {
    return <Bubble chat={chat} key={nanoid()} />;
  });

  return (
    <div className="text-white w-1/4 h-4/5 p-2 mr-3 bg-[#191B1F] rounded-lg ">
      <div className="flex flex-col h-full">
        <Header
          title="Chat"
          icon={BasicIcons.chat}
          onClose={() => setIsChatOpen(false)}
        />
        {/* <div className="mb-3 font-mono text-left text-lg p-2">
          <div className="flex items-center gap-2">{BasicIcons.chat}Chat</div>
          <div className="border-t mt-3 border-gray-700"></div>
        </div> */}
        <div ref={ref} className="overflow-auto mt-2 flex-col h-full">
          <div className="font-sans">{displayChats}</div>
        </div>
        <div className="flex py-1 pl-1">
          <input
            type="text"
            placeholder="Type a message"
            className="p-2 rounded-lg w-full bg-[#343744] text-sm"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button ref={buttonRef} className="p-1" onClick={handleSend}>
            {BasicIcons.send}
          </button>
        </div>
      </div>
    </div>
  );
};

const Bubble = ({ chat }: any) => {
  const [play, setPlay] = useState(false);
  return (
    <div
      key={nanoid()}
      className={`${
        chat.is_user
          ? "ml-auto text-md break-words max-w-xs w-fit py-1 px-4 mb-2 bg-[#216CFC] rounded-2xl items-center flex"
          : "w-fit py-1 px-4 break-words max-w-xs text-md mb-2 rounded-lg bg-[#343744]"
      }`}
    >
      <div className="text-xs text-blue-300 flex flex-row justify-between">
        {chat.is_user ? null : chat.name}{" "}
        <h2
          className="text cursor-pointer"
          onClick={() => {
            setPlay((prev) => !prev);
          }}
        >
          {!chat.is_user && <> {play ? "Playing" : "▶️ Play"}</>}

          <>
            {play && (
              <AudioStream
                //@ts-ignore
                voiceId={VOICE_IDS[chat.name] ?? "B5hYV9bBhKBQ4EbJdtfV"}
                text={chat.text}
                apiKey={"2c2b5289204699da816997a18aabc424"}
                voiceSettings={{
                  stability: 0.5,
                  similarity_boost: 0.7,
                }}
              />
            )}
          </>
        </h2>
      </div>
      {chat.text}
    </div>
  );
};

export default Chat;
