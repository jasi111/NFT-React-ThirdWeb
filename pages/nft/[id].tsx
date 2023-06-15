import React from "react";
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {
  // Auth
  // Metamask
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  console.log(address);
  return (
    <div className="h-screen flex flex-col lg:grid lg:grid-cols-10">
      {/* left screen */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="bg-gradient-tobr from-yellow-400 to-purple-600 items-center ">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
              src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg?size=338&ext=jpg&ga=GA1.2.1699825304.1666846740&semt=sph"
              alt=""
            />
          </div>
        </div>
        <div className="text-center p-5 space-y-6">
          <h1 className="text-4xl font-bold text-white">NFT Apes</h1>
          <h2 className="text-xl  text-gray-300">A collections of NFTs</h2>
        </div>
      </div>

      {/* right screen */}

      <div className="flex flex-1 flex-col p-12 lg:col-span-6 ">
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extrelight sm:w-80">
            The{" "}
            <span className="font-extrabold underline decoration-pink-600/50">
              NFT{" "}
            </span>
            Market Place
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs text-white font-bold  lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? "Sign Out" : "Sign In"}
            {/* if address available show signout else signout */}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-sm text-center text-rose-400">
            You are logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
            {/* start from beging show first five characters and then ..... show last 5 character */}
          </p>
        )}

        {/* Content  */}
        <div
          className=" mt-10 flex flex-1 flex-col items-center space-y-6 text-center
       lg:justify-center lg:space-y-0"
        >
          <img
            className="object-cover pb-10 w-80 lg:h-40"
            // src="ic/collage.gif"
            src="https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_1280.png"
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            Club | NFT Drop
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>

        {/* Mint Button */}
        <button className="mt-10 h-16 font-bold w-full bg-red-600 text-white rounded-full">
          Mint NFT(0.01 ETH)
        </button>
      </div>
    </div>
  );
}

export default NFTDropPage;
