"use client";
import { useState } from "react";
import TransportType from "./TransportType";
import SearchForm from "./SearchForm";

const SearchPanel = () => {
  const [selectedType, setSelectedType] = useState<string>("bus");

  return (
    <div className="w-[80%] h-auto pb-4 bg-white shadow-[0_8px_32px_hsla(207,57%,29%,0.12)] absolute top-[30%] left-[50%] translate-x-[-50%] rounded-2xl flex flex-col gap-6">
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
        <SearchForm mode={selectedType} />
      ) : (
        <div className="w-full min-h-[150px] flex items-center justify-center">
          <p className="text-lg text-gray">
            No data
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
