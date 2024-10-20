"use client";
import PostCard from "./PostCard";
import { Post } from "../interfaces/Post.interface";
import { PostGridProps } from "../interfaces/PostGridProps.interface";

const PostsGrid = ({ data }: PostGridProps) => {
  return (
    <div className="flex-col justify-start items-center gap-20 flex">
      <div className="w-[750px] h-[100px] bg-[#e8e8ea] rounded-xl flex-col justify-center items-center gap-2.5 flex">
        <div className="flex-col justify-start items-center flex">
          <div className="text-center text-[#696a75] text-sm font-normal font-['Work Sans'] leading-tight">
            Advertisement
          </div>
          <div className="text-center text-[#696a75] text-xl font-semibold font-['Work Sans'] leading-normal">
            You can place ads
          </div>
          <div className="text-center text-[#696a75] text-lg font-normal font-['Work Sans'] leading-relaxed">
            750x100
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-8 flex">
        <div className="self-stretch justify-start items-center gap-8 inline-flex">
          <div className="grow shrink basis-0 text-[#181a2a] text-2xl font-bold font-['Work Sans'] leading-7">
            Latest Post
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-5 flex">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data?.slice(0, 10).map((post: Post) => (
              <PostCard
                key={post.id}
                title={post.title}
                id={post.id}
                excerpt={post.body.substring(0, 100) + "..."}
              />
            ))}
          </div>
        </div>
        {/* <div className="flex-col justify-start items-start gap-5 flex">
          <div className="justify-start items-start gap-5 inline-flex">
            <PostCard title="Hey" id={1} excerpt={"Aress"} />
            <PostCard title="Hey" id={2} excerpt={"Aress"} />
            <PostCard title="Hey" id={3} excerpt={"Aress"} />
          </div>
          <div className="justify-start items-start gap-5 inline-flex">
            <PostCard title="Hey" id={4} excerpt={"Aress"} />
            <PostCard title="Hey" id={5} excerpt={"Aress"} />
            <PostCard title="Hey" id={6} excerpt={"Aress"} />
          </div>
          <div className="justify-start items-start gap-5 inline-flex">
            <PostCard title="Hey" id={7} excerpt={"Aress"} />
            <PostCard title="Hey" id={8} excerpt={"Aress"} />
            <PostCard title="Hey" id={9} excerpt={"Aress"} />
          </div>
        </div> */}
        <div className="px-5 py-3 rounded-md border border-[#696a75]/30 justify-center items-center gap-3 inline-flex">
          <div className="text-[#696a75] text-base font-medium font-['Work Sans'] leading-normal">
            View All Post
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsGrid;
