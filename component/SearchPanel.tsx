"use client";
import { useState } from "react";
import Image from "next/image";
import searchIcon from "@/public/search.svg";
import TransportType from "./TransportType";
import LabelInput from "./LabelInput";
import locationIcon from "@/public/location.svg";
import transferIcon from "@/public/transfer.svg";
import calendarIcon from "@/public/calendar.svg";
import PassengerButton from "./PassengerButton";

const SearchPanel = () => {
  const [selectedType, setSelectedType] = useState<string>("bus");
  const [passengerCount, setPassengerCount] = useState<number>(1);
  return (
    <div className="w-[1200px] h-[328px] bg-white shadow-[0_8px_32px_hsla(207,57%,29%,0.12)] absolute top-[30%] left-[50%] translate-x-[-50%] rounded-2xl flex flex-col gap-6">
      <div className="w-full shadow-[0_4px_12px_hsla(207,57%,29%,0.12)] rounded-2xl p-3 flex items-center">
        <TransportType
          id="bus"
          title="Bus & Shuttle"
          selected={selectedType}
          onSelect={setSelectedType}
        />
        <TransportType
          id="hotel"
          title="Hotel & Accommodation"
          selected={selectedType}
          onSelect={setSelectedType}
        />
        <TransportType
          id="flight"
          title="Fight"
          selected={selectedType}
          onSelect={setSelectedType}
        />
      </div>
      {selectedType === "bus" ? (
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-start gap-4 p-4">
            <div className="flex items-end gap-2 w-full">
              <LabelInput
                label="From"
                icon={locationIcon}
                placeholder="Enter city, terminal..."
              />
              <div className="size-12 flex-none rounded-full flex items-center justify-center bg-[hsla(0,0%,100%,1)] shadow-[0_2px_4px_hsla(207,57%,29%,0.12) cursor-pointer">
                <Image
                  src={transferIcon}
                  alt="Transfer Icon"
                  width={28}
                  height={28}
                />
              </div>
              <LabelInput
                label="To"
                icon={locationIcon}
                placeholder="Enter city, terminal..."
              />
            </div>
            <div className="flex gap-2 w-full">
              <LabelInput
                label="Departure Date"
                icon={calendarIcon}
                placeholder="DD / MM / YYYY 00:00"
              />
              <LabelInput
                label="Round Trip"
                icon={calendarIcon}
                placeholder="DD / MM / YYYY 00:00"
                checkBox
              />
            </div>
            <PassengerButton
              passengerCount={passengerCount}
              setPassengerCount={setPassengerCount}
            />
          </div>
          <div className="bg-[hsla(196,100%,55%,1)] w-[266px] py-4 px-5 flex items-center justify-center gap-2 rounded-full cursor-pointer self-center">
            <Image width={20} height={20} src={searchIcon} alt="Search Icon" />
            <p className="text-[hsla(0,0%,100%,1)] uppercase text-sm leading-5 font-semibold tracking-[10%]">
              Search
            </p>
          </div>
        </div>
      ) : (
        <div className="w-[1200px] h-[150px] flex items-center justify-center">
          <p className="text-lg text-[hsla(240,8%,50%,1)]">
            No data
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
