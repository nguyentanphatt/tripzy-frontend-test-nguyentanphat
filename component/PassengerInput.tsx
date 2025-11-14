import Image from 'next/image';
import { images } from '@/contants/image';

type PassengerInputProps = {
  passengerCount: number;
  setPassengerCount: (count: number) => void;
}

const PassengerInput = ({passengerCount, setPassengerCount}:PassengerInputProps) => {
  return (
    <div className="w-[149px] flex flex-col gap-2">
      <div className="flex gap-2">
        <label className="text-xs uppercase font-medium leading-4 text-light-gray">
          No.of Passenger
        </label>
      </div>
      <div className="flex items-center gap-2 border border-[hsla(220,10%,82%,1)] rounded-lg focus-within:border-primary">
        <div className="w-[109px] flex border-red-500 p-4">
          <Image src={images.passengerIcon} alt="icon" width={20} height={20} />
          <input
            type="text"
            value={passengerCount}
            className="w-full outline-none text-gray-900 placeholder-gray-400 bg-transparent text-center"
            onChange={(e) => setPassengerCount(Number(e.target.value))}
          />
        </div>
        <div className="w-8 self-stretch flex flex-col">
          <div
            className="flex items-center justify-center border-b border-l border-[hsla(220,13%,91%,1)] py-1 px-2 h-full cursor-pointer"
            onClick={() => setPassengerCount(passengerCount + 1)}
          >
            <Image
              src={images.chevronTopIcon}
              alt="Increase Button"
              width={16}
              height={16}
            />
          </div>
          <div
            className="flex items-center justify-center border-l border-[hsla(220,13%,91%,1)] py-1 px-2 h-full cursor-pointer"
            onClick={() => setPassengerCount(Math.max(1, passengerCount - 1))}
          >
            <Image
              src={images.chevronBottomIcon}
              alt="Decrease Button"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PassengerInput