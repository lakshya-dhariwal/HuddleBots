import { config } from "dotenv";
config();

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;

export const PORT = process.env.PORT as string;

export const ELEVEN_LABS = process.env.ELEVEN_LABS ;
export const AudioIds = { snoopstein: "SDHXG8H0VNEGANKVKIQ3" };
