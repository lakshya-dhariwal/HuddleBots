import { BACKEND } from "@/constants";
import axios from "axios";

export const VOICE_IDS = {
  Elon: "NbbJiFSZ7E99eg7orTch",
  Vitalik: "zuAWqmRXtoLKdggzvJZX",
  Snoopstein: "SDHXG8H0VNEGANKVKIQ3",
  Trump: "9lRVIl62QeO0yPiKWEoN",
  Code:"B5hYV9bBhKBQ4EbJdtfV",
  Facts:"B5hYV9bBhKBQ4EbJdtfV",
  Qna : "B5hYV9bBhKBQ4EbJdtfV",
  Joke: "B5hYV9bBhKBQ4EbJdtfV"

};

export async function platTTS(text: string, voice_id: string) {
  const res = await axios.post(BACKEND + "/tts", {
    voice_id,
    text,
  });
  console.log({ res });
}
