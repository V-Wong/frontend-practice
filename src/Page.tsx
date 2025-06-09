import type { PropsWithChildren } from "react";

const Page = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen h-full flex flex-col items-center gap-y-1 pt-5 bg-black text-white">
      {children}
    </div>
  );
};

export default Page;
