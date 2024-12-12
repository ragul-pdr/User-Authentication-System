import { MailtrapClient } from "mailtrap";

// const { MailtrapClient } = require("mailtrap");

const TOKEN = "a296487ca1b37112e68e6e51930bc18f";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
// const recipients = [
//   {
//     email: "dhara19032024@gmail.com",
//   },
// ];



//  client
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
