interface PostCardProps {
  id: number;
  title: string;
  excerpt: string;
}

const PostCard = ({ id, title, excerpt }: PostCardProps) => {
  return (
    <div className="w-[392px] h-[488px] p-4 bg-white rounded-xl border border-[#e8e8ea] flex-col justify-center items-center gap-4 inline-flex">
      <img
        className="w-[360px] h-60 rounded-md"
        src="https://via.placeholder.com/360x240"
      />
      <div className="self-stretch h-[200px] p-2 flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
          <div className="px-2.5 py-1 bg-[#4b6bfb]/5 rounded-md justify-center items-center gap-1 inline-flex">
            <div className="text-[#4b6bfb] text-sm font-medium font-['Work Sans'] leading-tight">
              {excerpt}
            </div>
          </div>
          <div className="self-stretch text-[#181a2a] text-2xl font-semibold font-['Work Sans'] leading-7">
            {title}
          </div>
        </div>
        <div className="justify-start items-center gap-5 inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <img
              className="w-9 h-9 rounded-[28px]"
              src="https://via.placeholder.com/36x36"
            />
            <div className="text-[#97989f] text-base font-medium font-['Work Sans'] leading-normal">
              Hossein Karbalaei
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
