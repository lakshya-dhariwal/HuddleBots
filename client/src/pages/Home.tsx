import React from "react";
import { Toaster } from "react-hot-toast";

function Home() {
  return (
    <div
      className="min-h-screen bg-gray-100 p-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `url(https://i.pinimg.com/564x/ac/a5/6a/aca56aee69a7fa5d6e573f48146c1b10.jpg)`,
      }}
    >
      <Toaster />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="relative px-4 py-10 bg-white shadow-xl rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200 "
          style={{ "backdrop-filter": "blur(14px)" }}
        >
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="md:text-5xl text-3xl text-center font-bold text-[#FF7E1D] font-krona">
                Leaderboard
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="pt-6 text-base flex justify-center items-center w-full m-auto leading-6 font-bold sm:text-lg sm:leading-7"></div>

              <div className="flex gap-4 justify-between items-center ">
                <img
                  src={`https://api.dicebear.com/6.x/notionists/svg?seed=1312`}
                  className="h-20 w-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full  sm:max-w-xl sm:mx-auto">
        <a href="/claim" target="_blank" rel="norefferer noreoppener">
          <div
            className="relative cursor-pointer text-yellow-500 font-bold bg-white shadow-xl rounded-2xl sm:p-6 bg-clip-padding bg-opacity-60 border border-gray-200 "
            style={{ "backdrop-filter": "blur(20px)" }}
          >
            <p className="font-krona font-lg text-center">
              ⚡️ Claim your{" "}
              <span className="cursor-pointer underline-offset-4 decoration-2 decoration-wavy transition ease-in-out  delay-150 decoration-[#FF7E1D] hover:underline">
                Rizz Coins ⚡️
              </span>
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
