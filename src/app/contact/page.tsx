"use client";

import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center bg-white dark:bg-[#171717]">
        <div className="mt-12 w-[1216px] p-12 bg-[#f6f6f7] rounded-xl flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="h-[248px] flex-col justify-start items-center gap-6 flex">
            <div className="justify-start items-center gap-4 inline-flex">
              <img
                className="w-16 h-16 rounded-[80px]"
                src="https://avatars.githubusercontent.com/u/100111649?s=400&u=fb67cf89f6221d6601e768cca178a7ee057aba76&v=4"
                alt="Profile"
              />
              <div className="flex-col justify-center items-start inline-flex">
                <div className="text-[#181a2a] text-xl font-medium font-['Work Sans'] leading-7">
                  Hossein Karbalaei
                </div>
                <div className="text-[#696a75] text-sm font-normal font-['Work Sans'] leading-tight">
                  Fullstack Developer
                </div>
              </div>
            </div>
            <div className="self-stretch text-center text-[#3b3c4a] text-lg font-normal font-['Work Sans'] leading-relaxed">
              Meet Hossein, a passionate writer and blogger with a love for
              technology and travel. Hossein holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </div>
            <div className="justify-start items-start gap-2 inline-flex">
              <div
                className="p-1 bg-[#696a75] rounded-md justify-center items-center gap-2 flex cursor-pointer"
                onClick={() => copyToClipboard("https://github.com/okaeiz")}
              >
                <GitHubIcon sx={{ color: "lightblue" }} />
              </div>
              <div
                className="p-1 bg-[#696a75] rounded-md justify-center items-center gap-2 flex cursor-pointer"
                onClick={() => copyToClipboard("@okaeiz")}
              >
                <TelegramIcon sx={{ color: "lightblue" }} />
              </div>
              <div
                className="p-1 bg-[#696a75] rounded-md justify-center items-center gap-2 flex cursor-pointer"
                onClick={() =>
                  copyToClipboard(
                    "https://www.linkedin.com/in/hossein-karbalaei-84110b248/"
                  )
                }
              >
                <LinkedInIcon sx={{ color: "lightblue" }} />
              </div>
              <div
                className="p-1 bg-[#696a75] rounded-md justify-center items-center gap-2 flex cursor-pointer"
                onClick={() => copyToClipboard("ho3kaei@gmail.com")}
              >
                <GoogleIcon sx={{ color: "lightblue" }} />
              </div>
            </div>
          </div>
        </div>

        {isCopied && (
          <div className="absolute top-4 left-4 p-2 bg-green-500 text-white rounded-md transition duration-300 z-50">
            ID copied to clipboard!
          </div>
        )}

        <Link href="/" passHref>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
            Go to Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default Contact;
