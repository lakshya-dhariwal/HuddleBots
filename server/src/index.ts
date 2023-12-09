import bodyParser from "body-parser";
import cors from "cors";
import { config } from "dotenv";
import Express, { Application, NextFunction, Request, Response } from "express";
import morgan from "morgan";
import logger from "./services/logger.service";
import { celeb_chat } from "./lib/openai";
import { PROMPTS_CELEBS } from "./config";

config();

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



app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: true,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

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
