import { createChat } from "completions";
import { OPENAI_API_KEY } from "../constants";

export const celeb_chat = createChat({
  apiKey: OPENAI_API_KEY,
  model: "gpt-3.5-turbo-0613",
});
