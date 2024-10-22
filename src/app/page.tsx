"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./post/Home";

const Page = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Home initialData={[]} />
    </QueryClientProvider>
  );
};

export default Page;
