import Link from "next/link";
import { PostCardProps } from "../interfaces/PostCardProps.interface";

const PostCard = ({ id, title, excerpt, userName }: PostCardProps) => {
  return (
    <div className="w-[392px] h-[488px] p-4 bg-white rounded-xl border border-[#e8e8ea] flex-col justify-center items-center gap-4 inline-flex">
      <img
        className="w-[360px] h-60 rounded-md"
        src="https://paintings.pinotspalette.com/some-beach-tv.jpg?v=10027528"
      />
      <div className="self-stretch h-[200px] p-2 flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
          <div className="px-2.5 py-1 bg-[#4b6bfb]/5 rounded-md justify-center items-center gap-1 inline-flex">
            <div className="text-[#4b6bfb] text-sm font-medium font-['Work Sans'] leading-tight">
              {excerpt.slice(0, 100)}...
            </div>
          </div>
          <Link
            href={`/post/${id}`}
            className="relative text-[#181a2a] text-2xl font-semibold font-['Work Sans'] leading-7 after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#181a2a] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition-transform after:duration-300"
          >
            {title.slice(0, 40)}
          </Link>
        </div>
        <div className="justify-start items-center gap-5 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <img
              className="w-9 h-9 rounded-[28px]"
              src="https://via.placeholder.com/36x36"
            />
            <div className="text-[#97989f] text-base font-medium font-['Work Sans'] leading-normal">
              {userName}
            </div>
          </div>
          <div className="text-[#97989f] text-base font-normal font-['Work Sans'] leading-normal">
            August 20, 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
