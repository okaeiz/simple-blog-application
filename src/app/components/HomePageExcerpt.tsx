"use client";

const HomePageExcerpt = () => {
  return (
    <div className="w-[598px] h-[304px] p-10 left-[64px] top-[360px] absolute bg-white rounded-xl shadow border border-[#e8e8ea] flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch h-[164px] flex-col justify-start items-start gap-4 flex">
        <div className="px-2.5 py-1 bg-[#4b6bfb] rounded-md justify-center items-center gap-1 inline-flex">
          <div className="text-white text-sm font-medium font-['Work Sans'] leading-tight">
            Aress
          </div>
        </div>
        <div className="self-stretch text-[#181a2a] text-3xl font-semibold font-['Work Sans'] leading-10">
          This simple blog application is the technical interview task for Aress
          mid-level front-end developer
        </div>
      </div>
      <div className="justify-start items-center gap-5 inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <img
            className="w-9 h-9 rounded-[28px]"
            src="https://avatars.githubusercontent.com/u/100111649?s=400&u=fb67cf89f6221d6601e768cca178a7ee057aba76&v=4"
          />
          <div className="text-[#97989f] text-base font-medium font-['Work Sans'] leading-normal">
            Hossein Karbalaei
          </div>
        </div>
        <div className="text-[#97989f] text-base font-normal font-['Work Sans'] leading-normal">
          October 22, 2024
        </div>
      </div>
    </div>
  );
};

export default HomePageExcerpt;
