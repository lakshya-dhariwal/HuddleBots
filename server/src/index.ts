import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import Express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import logger from "./services/logger.service";
import { celeb_chat } from "./lib/openai";
import { PROMPTS_CELEBS } from "./config";

config();

let CURRENT_ROOM_ID: string | null = null;

const app: Application = Express();
app.use(Express.json());
app.use(cors());
app.set("trust proxy", true);
app.use(
  morgan("combined", {
    stream: {
      write: (message: any) => logger.debug(message),
    },
  })
);

app.use(bodyParser.json({}));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/dopplebanter", async function (req: any, res: any, next: any) {
  const { celeb, prompt } = req.body;
  celeb_chat.addMessage({
    //@ts-ignore
    content: PROMPTS_CELEBS[celeb],
    role: "system",
  });
  console.log("Prompt passed to OPENAI");
  const reply = await celeb_chat.sendMessage(`${prompt}`);
  console.log({ reply });
  res.send({ reply: reply.content });
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: true,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.post(
  "/ai-client-room",
  (req: Request, res: Response, next: NextFunction) => {
    const { roomid } = req.body;
    console.log({ roomid });
    if (roomid) {
      CURRENT_ROOM_ID = roomid;
    }
    res.json({
      success: true,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    });
  }
);

app.get(
  "/ai-client-room",
  (req: Request, res: Response, next: NextFunction) => {
    res.send({ roomid: CURRENT_ROOM_ID });
  }
);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(405).json({
    success: false,
    message: "Method Not Allowed!",
  });
});

app.listen(process.env.PORT!, () => {
  logger.info(`Server running on Port: ${process.env.PORT}`);
});

process.on("SIGHUP", (_) => {
  process.exit(0);
});
process.on("SIGINT", (_) => {
  process.exit(0);
});
