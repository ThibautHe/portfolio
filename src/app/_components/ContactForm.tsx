import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Section() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_f923e7d",
          "template_r27ubwl",
          form.current,
          "6vTikx5BVmsFqb-QB"
        )
        .then(
          () => {
            console.log("SUCCESS!");
            form.current?.reset(); // Reset the form
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="h-full" action="">
      <div className=" p-10 flex flex-col gap-8 h-full justify-evenly">
        <div className=" flex gap-8 justify-between relative">
          <div className="flex flex-col gap-4 w-[45%]">
            <label htmlFor="user_name">Name</label>
            <input
              className="bg-black border-gray-500 border-[1px]"
              type="text"
              name="user_name"
            ></input>
          </div>
          <div className="flex flex-col gap-4 w-[45%]">
            <label htmlFor="email">Email</label>
            <input
              className="bg-black border-gray-500 border-[1px]"
              type="text"
              name="user_email"
            ></input>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <label htmlFor="message">Message</label>
            <textarea
              className="bg-black border-gray-500 border-[1px] h-[200px]"
              name="message"
            ></textarea>
          </div>
        </div>
        <div className="relative mx-auto w-1/3">
          <button
            type="submit"
            className="bg-white text-black w-full z-50 relative h-[50px]"
          >
            Submit
          </button>
          <div className="bg-black border-[1px] z-0 text-black w-full h-[50px] absolute top-4 left-4" />
        </div>
      </div>
    </form>
  );
}
