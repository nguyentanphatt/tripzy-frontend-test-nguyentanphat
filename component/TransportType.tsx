import { transportData } from "@/contants/data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  id: string;
  icon?: string | StaticImport;
  iconCircleBg?: string;
  bgColor?: string;
  title: string;
  selected: string;
  onSelect: (type: string) => void;
};

const TransportType = ({ id, title, selected, onSelect }: Props) => {
  const item = transportData.find((d) => d.id === id);
  if (!item) return null;
  const isSelected = selected === id;
  return (
    <div
      className={`w-full py-3 px-4 rounded-lg flex items-center gap-3 ${
        isSelected ? item.bgColor : "bg-white"
      } ${item.hoverColor} cursor-pointer`}
      onClick={() => onSelect && onSelect(id)}
    >
      <div
        className={`size-12 rounded-full flex items-center justify-center ${item.iconCircleBg}`}
      >
        <Image src={item.icon} alt={id} width={40} height={40} />
      </div>
      <p className="text-[hsla(240,10%,8%,1)] font-medium text-lg">{title}</p>
    </div>
  );
};

export default TransportType;
