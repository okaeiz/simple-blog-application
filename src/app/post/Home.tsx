"use client";

import { useQuery } from "react-query";
import { fetchPosts } from "../services/posts";
import Navbar from "../components/Navbar";
import PostsGrid from "../components/PostsGrid";
import HomePageExcerpt from "../components/HomePageExcerpt";
import Footer from "../components/Footer";
import { Post } from "../interfaces/Post.interface";

interface HomeProps {
  initialData: Post[];
}

const Home = ({ initialData }: HomeProps) => {
  const { data, error, isLoading } = useQuery<Post[]>("posts", fetchPosts, {
    initialData,
  });

  if (isLoading)
    return <div className="text-center text-xl py-10">Loading...</div>;

  if (error)
    return (
      <div className="text-center text-red-500 text-xl py-10">
        Error loading posts.
      </div>
    );

  return (
    <>
      <div className="w-[1920px] h-[3472px] bg-white dark:bg-[#171717] flex-col justify-center items-center inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <Navbar />
          <div className="flex-col justify-start items-center gap-[100px] flex">
            <div className="flex-col justify-start items-center gap-20 flex">
              <div className="w-[1216px] h-[664px] relative">
                <img
                  className="w-[1216px] h-[600px] left-0 top-0 absolute bg-[#141624]/40 rounded-xl"
                  src="https://wallpapers.com/images/hd/1080p-nature-background-c5s8tp0d4p9u3mr3.jpg"
                />
                <HomePageExcerpt />
              </div>
              <PostsGrid data={data} />
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
            </div>
            <div className="px-[352px] pt-16 bg-[#f6f6f7] border-t border-[#e8e8ea] flex-col justify-start items-start gap-16 flex">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Fetch posts on the server side
export async function getServerSideProps() {
  const posts = await fetchPosts();

  return {
    props: {
      initialData: posts, // Pass the fetched posts as initial data
    },
  };
}

export default Home;
