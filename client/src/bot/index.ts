import { dopplegangerBot } from "./handlers";

export const botHandler = async (message: string) => {
  const prompt = message.substring(1);
  const [command, text] = prompt.split(" ");
  let res;
  switch (command) {
    case "snoopstein":
      console.log("snoopstein ");
      res = await dopplegangerBot("snoopstein", text);
      return { name: "🔈 Snoopstein", reply: res };
    case "elon":
      console.log("elon ");
      res = await dopplegangerBot("elon", text);
      return { name: "🔈 Elon", reply: res };

    default:
      break;
  }
};
