import { transportData } from "@/contants/data";
import Image from "next/image";

type TransportTypeProps = {
  id: string;
  title: string;
  selected: string;
  onSelect: (type: string) => void;
};

const TransportType = ({ id, title, selected, onSelect }: TransportTypeProps) => {
  const item = transportData.find((d) => d.id === id);
  if (!item) return null;
  const isSelected = selected === id;
  return (
    <div
      className={`w-full py-3 px-4 rounded-lg flex items-center justify-center md:justify-start gap-3 ${
        isSelected ? item.bgColor : "bg-white"
      } ${item.hoverColor} cursor-pointer`}
      onClick={() => onSelect && onSelect(id)}
    >
      <div
        className={`size-12 flex-none rounded-full flex items-center justify-center ${item.iconCircleBg}`}
      >
        <Image src={item.icon} alt={id} width={40} height={40} />
      </div>
      <p className=" hidden md:block text-dark font-medium text-base lg:text-lg">{title}</p>
    </div>
  );
};

export default TransportType;
