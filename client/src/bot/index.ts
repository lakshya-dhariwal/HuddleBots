import { dopplegangerBot } from "./handlers";

export const botHandler = async (message: string) => {
  const prompt = message.substring(1);
  const [command, ...text] = prompt.split(" ");
  const mssg = text.join(" ");
  console.log({ mssg });
  let res;
  switch (command) {
    case "snoopstein":
      console.log("snoopstein ");
      res = await dopplegangerBot("snoopstein", mssg);
      return { name: "Snoopstein", reply: res };
    case "elon":
      console.log("elon ");
      res = await dopplegangerBot("elon", mssg);
      return { name: "Elon", reply: res };
    case "vitalik":
      console.log("vitalik ");
      res = await dopplegangerBot("vitalik", mssg);
      return { name: "Vitalik", reply: res };

    default:
      break;
  }
};
