import emailjs from "@emailjs/browser";

export const sendMail = async (data: Record<string, unknown>) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
    data,
    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
  );

  
};
