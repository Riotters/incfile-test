import { color } from "../../atomic/atoms/styles/colors";

export const rocket = {
  header: "Launch",
  header2: "your business with Incfile",
  text: "No Contracts. No Surprise.",
  text2: "Only $0 + State Fee to Launch Your Business.",
  button: {
    text: "Launch your business",
    url: `${process.env.ORDER_URL}/form-order-now.php`,
  },
};

export const states = {
  header: "Which States Are Fast?",
  tabs: {
    headers: ["Filling Times", "Expedited Time", "Expedited Price"],
  },
};

export const compare = {
  announcement: {
    content: {
      text: `The option to expedite your Business filing with the Secretary of State will be presented within the first page of the <a href="${process.env.ORDER_URL}/form-order-now.php">order process.</a>`,
      color: color.blue3,
    },
  },
  headers: ["State", "Normal processing time", "Expedited processing time", "Expedited Price"],
};

export const top = {
  header: "Easily Compare State Filing Times",
  text: "Use our comparison tool to help you evaluate the processing times \n" + "of each state.",
};
