import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
type Props = {
  label: string;
  placeholder?: string;
  icon: string | StaticImport
  checkBox?: boolean;
}
const LabelInput = ({label, placeholder, icon, checkBox } : Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex gap-2">
        {checkBox && (
          <input
            type="checkbox"
            className="w-4 h-4 border-[hsla(220,10%,82%,1)] rounded-xs accent-[hsla(196,100%,55%,1)]"
          />
        )}
        <label className="text-xs uppercase font-medium leading-4 text-[hsla(222,5%,42%,1)]">
          {label}
        </label>
      </div>
      <div className="flex items-center gap-2 border border-[hsla(220,10%,82%,1)] rounded-lg p-4 focus-within:border-[hsla(196,100%,55%,1)]">
        <Image src={icon} alt="icon" width={20} height={20} />
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-900 placeholder-gray-400"
        />
      </div>
    </div>
  );
}

export default LabelInput;