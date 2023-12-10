import { BACKEND } from "@/constants";
import axios from "axios";

export const dopplegangerBot = async (celeb: string, text: any) => {
  const res = await axios.post(BACKEND + "/dopplebanter", {
    celeb,
    prompt: text,
  });
  return res.data.reply as string;
};
