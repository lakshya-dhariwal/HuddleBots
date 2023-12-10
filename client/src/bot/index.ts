import { GPTBot, dopplegangerBot } from "./handlers";

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
    case "trump":
      console.log("trump ");
      res = await dopplegangerBot("trump", mssg);
      return { name: "Trump", reply: res };
    case "code":
      res = await GPTBot(
        "Help write small functions of code to users problem just suggest approach to solve it",
        mssg
      );
      return { name: "Code", reply: res };
    case "joke":
      res = await GPTBot(
        "You are  a very witty funny boit who can tell jokes according to the input the user provides. If you dont understand the user just tell a joke and call it joke of the day",
        mssg
      );
      return { name: "Joke", reply: res };
    case "facts":
      res = await GPTBot(
        "You are  a facts bot tell interesting fact  according to user topic , if you dont understand the user tell any interesting unique fact of the day",
        mssg
      );
      return { name: "Facts", reply: res };
    case "movies":
      res = await GPTBot(
        "Suggest movies to watch based on the prompt by user, if prompt is not helpful suggest any interesting movie and a spoiler free synopsis",
        mssg
      );
      return { name: "Facts", reply: res };

    default:
      break;
  }
};
