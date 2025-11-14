"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Dayjs } from "dayjs";
import DoubleCalendar from "./DoubleCalendar";

interface DateInputProps {
  label: string;
  placeholder?: string;
  icon: string;
  value?: string;
  selectedDate?: Dayjs | null;
  onDateChange?: (date: Dayjs) => void;
  disabled?: boolean;
  checkBox?: boolean;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
}

const DateInput = ({
  label,
  placeholder,
  icon,
  value,
  selectedDate,
  onDateChange,
  disabled,
  checkBox,
  checked,
  onCheckChange,
}: DateInputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const displayValue =
    value ??
    (selectedDate ? selectedDate.format("DD / MM / YYYY HH:mm") : "");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  useEffect(() => {
    if (disabled) {
      setIsOpen(false);
    }
  }, [disabled]);

  const handleToggleCalendar = () => {
    if (disabled || !onDateChange) {
      return;
    }
    setIsOpen((prev) => !prev);
  };

  const handleDateSelect = (date: Dayjs) => {
    onDateChange?.(date.startOf("day"));
    setIsOpen(false);
  };

  return (
    <div className="relative flex w-full flex-col gap-2" ref={wrapperRef}>
      <div className="flex items-center gap-2">
        {checkBox && (
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckChange?.(e.target.checked)}
            className="h-4 w-4 rounded-xs border-[hsla(220,10%,82%,1)] checkbox-primary"
          />
        )}
        <label className="text-xs font-medium uppercase leading-4 text-light-gray">
          {label}
        </label>
      </div>

      <div
        onClick={handleToggleCalendar}
        className={`flex items-center gap-2 rounded-lg border p-4 transition-colors ${disabled
            ? "cursor-not-allowed border-[hsla(210,5%,15%,0.1)] bg-[hsla(220,10%,95%,1)]"
            : "cursor-pointer border-[hsla(220,10%,82%,1)] hover:border-primary"
          }`}
      >
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className={disabled ? "opacity-50" : ""}
        />
        <input
          type="text"
          readOnly
          value={displayValue}
          placeholder={placeholder}
          className={` bg-transparent outline-none ${disabled
              ? "text-[hsla(220,10%,70%,1)] placeholder-[hsla(220,10%,70%,1)]"
              : "text-gray-900 placeholder-gray-400"
            }`}
        />
      </div>

      {isOpen && onDateChange && (
        <div className={`absolute ${checkBox ? "right-0" : "left-0"} top-full z-20 mt-2 w-[569px]`}>
          <DoubleCalendar value={selectedDate ?? undefined} onChange={handleDateSelect} />
        </div>
      )}
    </div>
  );
};

export default DateInput;
