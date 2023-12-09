import { BACKEND } from "@/constants";
import axios from "axios";

export const dopplegangerBot = async (celeb: string, text: any) => {
  console.log("yes");
  const res = await axios.post(BACKEND + "/dopplebanter", {
    celeb,
    prompt: text,
  });
  console.log("yes 2");
  return res.data.reply as string;
};
