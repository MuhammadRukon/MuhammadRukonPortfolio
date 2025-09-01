"use client";
import React, { FormEvent } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { sendMail } from "@/app/config/email";

export function Form() {
  const checkEmailRestriction = (email: string): boolean => {
    if (typeof window === "undefined") return false;

    const lastSentTime = localStorage.getItem(email);
    if (!lastSentTime) return false;

    const lastSent = new Date(lastSentTime);
    const now = new Date();
    const threeDaysInMs = 7 * 24 * 60 * 60 * 1000;

    return now.getTime() - lastSent.getTime() < threeDaysInMs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email") as string;

    if (!formData.get("fullname") || !email || !formData.get("textArea")) {
      alert("Please enter all fields");
      return;
    }

    if (checkEmailRestriction(email)) {
      alert(
        "You already sent an email, I can't allow you to send multiple emails as I am using free tier, contact me via whatsapp"
      );
      return;
    }

    const data = {
      name: formData.get("fullname"),
      email: email,
      title: formData.get("subject"),
      time: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      message: formData.get("textArea"),
    };

    try {
      await sendMail(data);
      alert("✅ Your message has been sent!");
      (e.target as HTMLFormElement).reset();

      //save the timestamp on email id
      if (typeof window !== "undefined") {
        localStorage.setItem(email, new Date().toISOString());
      }
    } catch (err) {
      console.error(err);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="shadow-input text-left mx-auto w-full max-w-md rounded-none p-2 md:rounded-2xl md:p-4">
      <h2 className="text-center text-lg sm:text-xl font-bold text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="fullname">Full name</Label>
            <Input
              name="fullname"
              id="fullname"
              placeholder="full name"
              type="text"
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            name="email"
            id="email"
            placeholder="someone@gmail.com"
            type="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="textArea">Subject</Label>
          <Input name="subject" id="subject" placeholder="Subject" type="text" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="textArea">Message</Label>
          <Input
            name="textArea"
            id="textArea"
            placeholder="write mail"
            type="textarea"
            required
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block text-xs sm:text-sm h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Send Mail &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4 ">
          {/* <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-2 rounded-md bg-gradient-to-r from-[#ffcf23] to-[#f01c74] via-[#5c1fd6] px-4 font-medium text-black dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <a
              href="https://www.instagram.com/muhammad.rukon/"
              className="text-sm text-neutral-700 dark:text-neutral-300"
            >
              Instagram
            </a>
            <BottomGradient />
          </button> */}
          <div className="group/btn shadow-input relative flex h-10 w-full items-center justify-center space-x-1 sm:space-x-2 rounded-md bg-[#0f745e] px-4 font-medium text-black dark:shadow-[0px_0px_1px_1px_#262626]">
            <IconBrandWhatsapp className="h-3 w-3 sm:h-4 sm:w-4 text-neutral-800 dark:text-neutral-300" />
            <a
              href="https://wa.me/8801815780053"
              className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300"
            >
              Whatsapp
            </a>
            <BottomGradient />
          </div>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
  );
};
