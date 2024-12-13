import { MailtrapClient } from "mailtrap";


const TOKEN = "a296487ca1b37112e68e6e51930bc18f";



export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
