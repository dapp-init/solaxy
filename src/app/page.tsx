"use client";
import Image from "next/image";
import images from "../constant/images";
import TidioChat from "@/components/tidio";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to another page
    router.push("/walletconnect");
  };

  return (
    <div className="bg-[#0d0d0d]">
      <Navbar />

      {/* header */}
      <div className="flex flex-row items-center justify-between p-4">
          <Image src={images.header1} alt="Logo" className="w-1/2 h-auto " priority />

          <div className="w-1/2 text-white bg-[#0d0d0d] max-w-md h-96 flex flex-col items-center justify-center border rounded-md">
            <Image
              src={images.header2}
              alt="Logo"
              className="w-1/2 h-auto mb-3"
            />
            <button
              className="bg-[#a7de26] text-black mt-5 mb-4 border border-black rounded-lg p-2 w-40"
              onClick={handleClick}
            >
              Buy with card
            </button>
            <button
              className="bg-[#4c99e0] border border-black rounded-lg p-2 w-40"
              onClick={handleClick}
            >
              Buy with crypto
            </button>
          </div>
        </div>

      {/* body */}

    

      {/* //////// */}

      <div className="w-full flex justify-center items-center ">
        <Image
          src={images.phone}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>

      <div className="w-full flex justify-center items-center ">
        <Image
          src={images.img1}
          alt="Logo"
          className="max-w-full max-h-full "
        />
      </div>

      {/* //////// */}

  

      {/* //////// */}



      {/* //////// */}

      {/* <div className="flex flex-col mt-7 justify-center items-center gap-2">
        <div className="w-full mt-10 flex justify-center items-center ">
          <Image
            src={images.footer}
            alt="Logo"
            className="max-w-full max-h-full "
          />
        </div>
      </div> */}

      {/* <TidioChat /> */}

      {/* key features */}
    </div>
  );
}
