import Image from 'next/image';
import React from 'react'
import emergencyIcon from "@/public/emergency.svg"
const Header = () => {
  return (
    <div className="h-[50%] w-full bg-linear-to-b from-[hsla(223,100%,98%,1)] to-[hsla(196,100%,93%,1)]">
      <div className="h-[100px] flex items-center pl-[10%]">
        <Image
          src={emergencyIcon}
          alt="EmergencyIcon"
          width={40}
          height={40}
        />
        <h1 className="font-bold text-[28px] leading-10 text-[hsla(196,100%,55%,1)]">
          Tripzy
        </h1>
      </div>
      <div className="text-center">
        <h1 className="text-[hsla(240,10%,8%,1)] font-semibold text-[40px] tracking-[0.89px]">
          Travel Smarter, Not Harder
        </h1>
        <p className="text-[hsla(240,8%,50%,1)] text-lg">
          Make every trip effortless. Tripzy lets you book rides and plan
          journeys with ease
        </p>
      </div>
    </div>
  );
}

export default Header