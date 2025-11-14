import Image from 'next/image';
import { images } from '@/contants/image';
const Header = () => {
  return (
    <div className="h-[50%] w-full bg-linear-to-b from-[hsla(223,100%,98%,1)] to-[hsla(196,100%,93%,1)]">
      <div className="h-[100px] flex items-center pl-[10%]">
        <Image
          src={images.emergencyIcon}
          alt="EmergencyIcon"
          width={40}
          height={40}
        />
        <h1 className="font-bold text-[28px] leading-10 text-primary">
          Tripzy
        </h1>
      </div>
      <div className="text-center">
        <h1 className="text-dark font-semibold text-xl md:text-[40px] tracking-[0.89px]">
          Travel Smarter, Not Harder
        </h1>
        <p className="text-gray text-base md:text-lg">
          Make every trip effortless. Tripzy lets you book rides and plan
          journeys with ease
        </p>
      </div>
    </div>
  );
}

export default Header