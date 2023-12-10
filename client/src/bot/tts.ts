import { BACKEND } from "@/constants";
import axios from "axios";

export const VOICE_IDS = {
  Elon: "zuAWqmRXtoLKdggzvJZX",
  Vitalik: "zuAWqmRXtoLKdggzvJZX",
  Snoopstein: "SDHXG8H0VNEGANKVKIQ3",
  Trump: "SDHXG8H0VNEGANKVKIQ3",
  Code:"B5hYV9bBhKBQ4EbJdtfV",
  Facts:"B5hYV9bBhKBQ4EbJdtfV",
  Qna : "B5hYV9bBhKBQ4EbJdtfV",
  Joke: "SDHXG8H0VNEGANKVKIQ3"

};

export async function platTTS(text: string, voice_id: string) {
  const res = await axios.post(BACKEND + "/tts", {
    voice_id,
    text,
  });
  console.log({ res });
}
