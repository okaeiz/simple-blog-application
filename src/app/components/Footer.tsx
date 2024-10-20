"use client";

const Footer = () => {
  return (
    <>
      <div className="justify-start items-start gap-5 inline-flex">
        <div className="w-[289px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="text-[#181a2a] text-lg font-semibold font-['Plus Jakarta Sans'] leading-7">
              About
            </div>
            <div className="w-[280px] text-[#696a75] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1 flex">
            <div>
              <span className="text-[#181a2a] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                Email :{" "}
              </span>
              <span className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                info@jstemplate.net
              </span>
            </div>
            <div>
              <span className="text-[#181a2a] text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                Phone :{" "}
              </span>
              <span className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                880 123 456 789
              </span>
            </div>
          </div>
        </div>
        <div className="h-[236px] justify-center items-start gap-20 flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#181a2a] text-lg font-semibold font-['Plus Jakarta Sans'] leading-7">
              Quick Link
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Home
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                About
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Blog
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Archived
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Author
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Contact
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="text-[#181a2a] text-lg font-semibold font-['Plus Jakarta Sans'] leading-7">
              Category
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Lifestyle
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Technology
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Travel
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Business
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Economy
              </div>
              <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Sports
              </div>
            </div>
          </div>
        </div>
        <div className="w-[392px] p-8 bg-white rounded-xl flex-col justify-start items-center gap-[30px] inline-flex">
          <div className="flex-col justify-start items-center gap-2 flex">
            <div className="text-center text-[#181a2a] text-xl font-semibold font-['Work Sans'] leading-normal">
              Weekly Newsletter
            </div>
            <div className="text-center text-[#696a75] text-base font-normal font-['Work Sans'] leading-normal">
              Get blog articles and offers via email
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="h-12 flex-col justify-start items-start gap-1 flex">
              <div className="self-stretch px-4 py-3 bg-white rounded-md border border-[#dcdddf] justify-start items-center gap-2.5 inline-flex">
                <div className="grow shrink basis-0 text-[#97989f] text-base font-normal font-['Work Sans'] leading-normal">
                  Your Email
                </div>
                <div className="w-5 h-5 relative" />
              </div>
            </div>
            <div className="self-stretch px-5 py-3 bg-[#4b6bfb] rounded-md justify-center items-center gap-3 inline-flex">
              <div className="text-white text-base font-medium font-['Work Sans'] leading-normal">
                Subscribe
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1216px] py-8 border-t border-[#dcdddf] justify-start items-center gap-16 inline-flex">
        <div className="justify-start items-center gap-2.5 flex">
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div>
              <span className="text-[#141624] text-xl font-normal font-['Plus Jakarta Sans'] leading-7">
                Meta
              </span>
              <span className="text-[#141624] text-xl font-extrabold font-['Plus Jakarta Sans'] leading-7">
                Blog
              </span>
            </div>
            <div>
              <span className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                ©{" "}
              </span>
              <span className="text-[#141624] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                JS Template
              </span>
              <span className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                {" "}
                2023. All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-6 justify-end items-center gap-4 flex">
          <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Terms of Use
          </div>
          <div className="w-6 h-[0px] origin-top-left rotate-90 border border-[#e8e8ea]"></div>
          <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Privacy Policy
          </div>
          <div className="w-6 h-[0px] origin-top-left rotate-90 border border-[#e8e8ea]"></div>
          <div className="text-[#3b3c4a] text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
            Cookie Policy
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
