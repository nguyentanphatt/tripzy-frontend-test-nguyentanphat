"use client"
import React, { useState } from 'react'
import LocationCombobox, { LocationOption } from './LocationCombobox';
import { locations } from '@/contants/data';
import { Dayjs } from 'dayjs';
import Image from 'next/image';
import DateInput from './DateInput';
import PassengerInput from './PassengerInput';
import { images } from '@/contants/image';
import { validateSearchForm, ValidationErrors, isFormValid } from '@/utils/inputValidate';

const SearchForm = () => {
    const [passengerCount, setPassengerCount] = useState<number>(1);
    const [fromLocation, setFromLocation] = useState<LocationOption | null>(null);
    const [toLocation, setToLocation] = useState<LocationOption | null>(null);
    const [departureDate, setDepartureDate] = useState<Dayjs | null>(null);
    const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
    const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);
    const [errors, setErrors] = useState<ValidationErrors>({});

    const handleSwapLocations = () => {
        setFromLocation(toLocation);
        setToLocation(fromLocation);
    };

    const handleSearch = () => {
        const validationErrors = validateSearchForm({
            fromLocation,
            toLocation,
            departureDate,
            returnDate,
            isRoundTrip,
            passengerCount,
        });

        setErrors(validationErrors);

        if (isFormValid(validationErrors)) {
            // Form is valid, proceed with search
            console.log('Search submitted:', {
                fromLocation,
                toLocation,
                departureDate,
                returnDate,
                isRoundTrip,
                passengerCount,
            });
        }
    };
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start gap-4 p-4">
                <div className="flex items-end gap-2 w-full">
                    <div className="flex flex-col gap-1 w-full">
                        <LocationCombobox
                            label="From"
                            icon={images.locationIcon}
                            placeholder="Enter city, terminal..."
                            options={locations}
                            value={fromLocation}
                            onChange={(value) => {
                                setFromLocation(value);
                                if (errors.fromLocation) {
                                    setErrors((prev) => ({ ...prev, fromLocation: undefined }));
                                }
                            }}
                        />
                        <div className="min-h-[20px]">
                            {errors.fromLocation && (
                                <p className="text-xs text-danger mt-1">{errors.fromLocation}</p>
                            )}
                        </div>
                    </div>
                    <div>
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
                        <div className="min-h-[20px] mt-1" />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <LocationCombobox
                            label="To"
                            icon={images.locationIcon}
                            placeholder="Enter city, terminal..."
                            options={locations}
                            value={toLocation}
                            onChange={(value) => {
                                setToLocation(value);
                                if (errors.toLocation) {
                                    setErrors((prev) => ({ ...prev, toLocation: undefined }));
                                }
                            }}
                        />
                        <div className="min-h-[20px]">
                            {errors.toLocation && (
                                <p className="text-xs text-danger mt-1">{errors.toLocation}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 w-full">
                    <div className="flex flex-col gap-1 w-full">
                        <DateInput
                            label="Departure Date"
                            icon={images.calendarIcon}
                            placeholder="DD / MM / YYYY 00:00"
                            selectedDate={departureDate}
                            onDateChange={(date) => {
                                setDepartureDate(date);
                                if (errors.departureDate) {
                                    setErrors((prev) => ({ ...prev, departureDate: undefined }));
                                }
                            }}
                        />
                        <div className="min-h-[20px]">
                            {errors.departureDate && (
                                <p className="text-xs text-danger mt-1">{errors.departureDate}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
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
                                    setErrors((prev) => ({ ...prev, returnDate: undefined }));
                                }
                            }}
                            disabled={!isRoundTrip}
                            selectedDate={returnDate}
                            onDateChange={(date) => {
                                setReturnDate(date);
                                if (errors.returnDate) {
                                    setErrors((prev) => ({ ...prev, returnDate: undefined }));
                                }
                            }}
                        />
                        <div className="min-h-[20px]">
                            {errors.returnDate && (
                                <p className="text-xs text-danger mt-1">{errors.returnDate}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <PassengerInput
                        passengerCount={passengerCount}
                        setPassengerCount={(count) => {
                            setPassengerCount(count);
                            if (errors.passengers) {
                                setErrors((prev) => ({ ...prev, passengers: undefined }));
                            }
                        }}
                    />
                    <div className="min-h-[20px]">
                        {errors.passengers && (
                            <p className="text-xs text-danger mt-1">{errors.passengers}</p>
                        )}
                    </div>
                </div>
            </div>
            <button
                type="button"
                onClick={handleSearch}
                className="bg-primary w-[266px] py-4 px-5 flex items-center justify-center gap-2 rounded-full cursor-pointer self-center hover:opacity-90 transition-opacity"
            >
                <Image width={20} height={20} src={images.searchIcon} alt="Search Icon" />
                <p className="text-[hsla(0,0%,100%,1)] uppercase text-sm leading-5 font-semibold tracking-[10%]">
                    Search
                </p>
            </button>
        </div>
    )
}

export default SearchForm