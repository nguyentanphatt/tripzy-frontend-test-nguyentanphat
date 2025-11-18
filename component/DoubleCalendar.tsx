import { useEffect, useMemo, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Image from "next/image";
import { images } from '@/contants/image';
const WEEKDAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

interface Props {
  value?: Dayjs | null;
  onChange?: (date: Dayjs) => void;
}

const DoubleCalendar = ({ value, onChange }: Props) => {
  const [currentMonth, setCurrentMonth] = useState(() =>
    (value ?? dayjs()).startOf("month"),
  );

  const months = useMemo(() => {
    const firstMonth = currentMonth.startOf("month");
    const secondMonth = firstMonth.add(1, "month");
    return [firstMonth, secondMonth];
  }, [currentMonth]);

  useEffect(() => {
    if (value) {
      setCurrentMonth(value.startOf("month"));
    }
  }, [value]);

  const handlePrev = () => {
    setCurrentMonth((prev) => prev.subtract(1, "month"));
  };

  const handleNext = () => {
    setCurrentMonth((prev) => prev.add(1, "month"));
  };

  const renderCalendar = (month: Dayjs) => {
    let startOfMonth = month.startOf("month");
    while (startOfMonth.day() !== 1) {
      startOfMonth = startOfMonth.subtract(1, "day");
    }

    let endOfMonth = month.endOf("month");
    while (endOfMonth.day() !== 0) {
      endOfMonth = endOfMonth.add(1, "day");
    }

    const days: Dayjs[] = [];

    let date = startOfMonth;
    while (date.isBefore(endOfMonth) || date.isSame(endOfMonth, "day")) {
      days.push(date);
      date = date.add(1, "day");
    }

    return (
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-7 gap-x-1 md:gap-x-3 text-xs font-medium uppercase text-neutral-400">
          {WEEKDAYS.map((day) => (
            <div key={`${month.format("YYYY-MM")}-${day}`} className="md:size-8 flex items-center justify-center">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-x-1 md:gap-x-3 gap-y-2 text-sm">
          {days.map((day) => {
            const isCurrentMonth = day.month() === month.month();
            const isPast = day.isBefore(dayjs(), "day");
            const isSelected = value ? value.isSame(day, "day") : false;
            const isToday = dayjs().isSame(day, "day");
            const isoDayIndex = (day.day() + 6) % 7;
            const isWeekend = isoDayIndex >= 5;

            const baseClasses =
              "mx-auto size-8 flex items-center justify-center rounded-full transition-colors";

            const colorClasses = !isCurrentMonth
              ? "text-light"
              : isPast
              ? "text-light"
              : isSelected
              ? "bg-primary text-white"
              : isToday
              ? "text-primary"
              : isWeekend
              ? "text-danger hover:bg-blue-100"
              : "text-dark hover:bg-blue-100";

            return (
              <button
                key={day.format("YYYY-MM-DD")}
                className={`${baseClasses} ${colorClasses}`}
                disabled={!isCurrentMonth || isPast}
                onClick={() => onChange?.(day)}
              >
                {day.date()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="h-auto md:h-[370px] w-full flex flex-col gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div
          onClick={handlePrev}
          className="flex h-9 w-9 items-center justify-center cursor-pointer"
          aria-label="Previous month"
        >
          <Image src={images.chevronLeftIcon} alt="chevron left" width={20} height={20} />
        </div>
        <div className="flex flex-1 justify-center md:justify-evenly gap-8 text-base font-semibold text-neutral-700">
          <span className="md:hidden">{months[0].format("MMMM YYYY")}</span>
          {months.map((month) => month.format("MMMM YYYY")).map((label) => (
            <span key={label} className="hidden md:inline">{label}</span>
          ))}
        </div>
        <div
          onClick={handleNext}
          className="flex h-9 w-9 items-center justify-center cursor-pointer"
          aria-label="Next month"
        >
          <Image src={images.chevronRightIcon} alt="chevron right" width={20} height={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {months.map((month, index) => (
          <div key={month.format("YYYY-MM")} className={index === 1 ? "hidden md:block" : ""}>
            {renderCalendar(month)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoubleCalendar;
