// import { MailtrapClient } from "mailtrap"
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailtrapClient, sender } from "./mailtrap.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verfication",
    });
    console.log("Email send successfully!");
  } catch (error) {
    console.log(`Error sending verfication email: ${error}`);

    throw new Error(`Error sending verfication email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
//   const { MailtrapClient } = require("mailtrap");

  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      template_uuid: "6f6a04f3-c75d-4566-8641-9425e75db42f",
      template_variables: {
        name: name,
        company_info_name: "Authentication Private Limited.",
      },
    });
    console.log("Email send Successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`,error);

    throw new Error(`Error sending welcome email: ${error}`)
  }
};

//1:04:00

export const sendPasswordResetEmail=async (email,resetURL)=>{
  const recepient=[{ email}];

  try {
    const response = await mailtrapClient.send({
      from:sender,
      to:recepient,
      subject:"Reset your password.",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}',resetURL),
      category:"Password Reset",
    })
  } catch (error) {
    console.error(`Error sending password reset email`,error);

    throw new Error(`Error sending password reset email: ${error}`)
  }

}

export const sendResetSuccessEmail=async(email)=>{
  const recepient=[{email}];

  try {
    const response=await mailtrapClient.send({
      from:sender,
      to:recepient,
      subject:"Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category:"Password Reset",
    });

    console.log('Password reset email sent successfully!',response);

  } catch (error) {
    console.error(`Error sending password reset success email `,error);

    throw new Error(`Error sending password reset success email: ${error}`)
  }
}