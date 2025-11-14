"use client"
import React, { useState } from 'react'
import LocationCombobox, { LocationOption } from './LocationCombobox';
import { locations } from '@/contants/data';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import DateInput from './DateInput';
import PassengerInput from './PassengerInput';
import { images } from '@/contants/image';
const SearchForm = () => {
    const [selectedType, setSelectedType] = useState<string>("bus");
    const [passengerCount, setPassengerCount] = useState<number>(1);
    const [fromLocation, setFromLocation] = useState<LocationOption | null>(null);
    const [toLocation, setToLocation] = useState<LocationOption | null>(null);
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
    const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);

    const handleSwapLocations = () => {
        setFromLocation(toLocation);
        setToLocation(fromLocation);
    };
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-4 p-4">
                <div className="flex items-end gap-2 w-full">
                    <LocationCombobox
                        label="From"
                        icon={images.locationIcon}
                        placeholder="Enter city, terminal..."
                        options={locations}
                        value={fromLocation}
                        onChange={setFromLocation}
                    />
                    <button
                        type="button"
                        onClick={handleSwapLocations}
                        className="size-12 flex-none rounded-full flex items-center justify-center bg-[hsla(0,0%,100%,1)] shadow-[0_2px_4px_hsla(207,57%,29%,0.12)] transition hover:shadow-[0_4px_10px_rgba(15,70,118,0.18)]"
                    >
                        <Image
                            src={images.transferIcon}
                            alt="Transfer Icon"
                            width={28}
                            height={28}
                        />
                    </button>
                    <LocationCombobox
                        label="To"
                        icon={images.locationIcon}
                        placeholder="Enter city, terminal..."
                        options={locations}
                        value={toLocation}
                        onChange={setToLocation}
                    />
                </div>
                <div className="flex gap-2 w-full">
                    <DateInput
                        label="Departure Date"
                        icon={images.calendarIcon}
                        placeholder="DD / MM / YYYY 00:00"
                        selectedDate={departureDate}
                        onDateChange={(date) => setDepartureDate(date)}
                    />
                    <DateInput
                        label="Round Trip ?"
                        icon={images.calendarIcon}
                        placeholder="DD / MM / YYYY 00:00"
                        checkBox
                        checked={isRoundTrip}
                        onCheckChange={(checked) => {
                            setIsRoundTrip(checked);
                            if (!checked) {
                                setReturnDate(null);
                            }
                        }}
                        disabled={!isRoundTrip}
                        selectedDate={returnDate}
                        onDateChange={(date) => setReturnDate(date)}
                    />
                </div>
                <PassengerInput
                    passengerCount={passengerCount}
                    setPassengerCount={setPassengerCount}
                />
            </div>
            <div className="bg-primary w-[266px] py-4 px-5 flex items-center justify-center gap-2 rounded-full cursor-pointer self-center">
                <Image width={20} height={20} src={images.searchIcon} alt="Search Icon" />
                <p className="text-[hsla(0,0%,100%,1)] uppercase text-sm leading-5 font-semibold tracking-[10%]">
                    Search
                </p>
            </div>
        </div>
    )
}

export default SearchForm