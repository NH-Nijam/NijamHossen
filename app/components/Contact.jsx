"use client";
import Image from "next/image";
import React, { useState } from "react";
import contactImg from "../img/apple-606761_1280.jpg";
import Swal from "sweetalert2";
import Link from "next/link";
import emailjs from "emailjs-com";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa6";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // 🛑 Honeypot spam check
    if (form.botcheck.value) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Thanks for contacting me 😊",
        timer: 1500,
        showConfirmButton: false,
      });

      form.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contacts" className=" pt-[130px]">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center underline decoration-wavy tracking-[3px]"
      >
        Contact Me
      </h1>

      <div className="mt-20 flex lg:flex-row flex-col gap-10 justify-center items-stretch">
        {/* CONTACT INFO */}
        <div
          data-aos="fade-right"
          className="lg:w-2/5 w-full md:p-10 p-4 shadow-lg shadow-orange-600 rounded-b-xl flex flex-col"
        >
          <div className="w-full h-[300px]">
            <Image
              src={contactImg}
              alt="contact"
              className="rounded-lg w-full h-full object-cover hover:scale-105 duration-500"
            />
          </div>

          <div className="mt-6 flex-grow">
            <h2 className="text-2xl md:text-3xl font-semibold">
              MD Nijam Hossen
            </h2>
            <h3 className="text-base md:text-xl font-medium">MERN Developer</h3>
            <p className="mt-4 opacity-80 text-justify">
              I am available for freelance or full-time positions. Contact me
              and let's talk.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl opacity-60">CONNECT WITH ME</h2>
            <div className="mt-6 flex gap-4 justify-between">
              <SocialLink href="https://github.com/NH-Nijam">
                <FiGithub />
              </SocialLink>
              <SocialLink href="https://facebook.com">
                <FaFacebookF />
              </SocialLink>
              <SocialLink href="https://linkedin.com">
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink href="https://pinterest.com">
                <FaPinterestP />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div
          data-aos="fade-left"
          className=" w-full md:p-10 p-4 shadow-lg shadow-orange-600 rounded-b-xl flex flex-col"
        >
          <form
            onSubmit={formHandler}
            className="flex flex-col gap-5 flex-grow"
          >
            <input
              type="text"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid md:grid-cols-2 gap-5">
              <Input label="Name" name="name" />
              <Input label="Number" name="number" type="number" />
            </div>

            <Input label="Email" name="email" type="email" />
            <Input label="Subject" name="subject" />

            <div className="flex flex-col gap-2 flex-grow">
              <label>Message</label>
              <textarea
                name="message"
                rows={6}
                required
                className="input-style h-full resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="bg-orange-600 mt-auto rounded-md p-3 text-xl font-semibold text-white disabled:opacity-60"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div className="flex flex-col gap-2">
    <label>{label}</label>
    <input {...props} required className="input-style" />
  </div>
);

const SocialLink = ({ href, children }) => (
  <Link
    href={href}
    target="_blank"
    className="w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center hover:bg-orange-600 hover:text-white duration-300"
  >
    {children}
  </Link>
);

export default ContactPage;
