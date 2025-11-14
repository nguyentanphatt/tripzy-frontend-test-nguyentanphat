"use client";
import { Fragment, useMemo, useState } from "react";
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type LocationOption = {
    short_code: string;
    english_name: string;
    code_state: string;
};

type LocationComboboxProps = {
    label: string;
    placeholder?: string;
    icon: string | StaticImport;
    options: LocationOption[];
    value: LocationOption | null;
    onChange: (value: LocationOption | null) => void;
};

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, "");

const LocationCombobox = ({
    label,
    placeholder,
    icon,
    options,
    value,
    onChange,
}: LocationComboboxProps) => {
    const [query, setQuery] = useState("");

    const filteredOptions = useMemo(() => {
        if (!query.trim()) {
            return options;
        }

        const normalizedQuery = normalize(query);

        return options.filter((option) =>
            [option.short_code, option.english_name, option.code_state]
                .map(normalize)
                .some((field) => field.includes(normalizedQuery))
        );
    }, [options, query]);

    const handleChange = (option: LocationOption | null) => {
        onChange(option);
        setQuery("");
    };

    return (
        <Combobox value={value} onChange={handleChange} by={(a, b) => a?.short_code === b?.short_code}>
            <div className="relative flex w-full flex-col gap-2">
                <label className="text-xs font-medium uppercase leading-4 text-light-gray">
                    {label}
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-[hsla(220,10%,82%,1)] p-4 focus-within:border-primary">
                    <Image src={icon} alt="icon" width={20} height={20} />
                    <ComboboxInput
                        className="w-full border-none bg-transparent text-gray-900 placeholder-gray-400 focus:outline-none"
                        displayValue={(option: LocationOption | null) =>
                            option ? `${option.short_code} - ${option.english_name}` : ""
                        }
                        placeholder={placeholder}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                </div>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <ComboboxOptions className="absolute top-full z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl border border-[hsla(220,10%,92%,1)] bg-white p-2 shadow-[0_8px_24px_rgba(15,70,118,0.16)]">
                        {filteredOptions.length === 0 ? (
                            <div className="px-3 py-2 text-sm text-[hsla(222,5%,42%,1)]">
                                No results found
                            </div>
                        ) : (
                            filteredOptions.map((option) => (
                                <ComboboxOption
                                    key={option.short_code}
                                    value={option}
                                    className={({ focus }) =>
                                        [
                                            "cursor-pointer rounded-lg px-3 py-2",
                                            focus ? "bg-[hsla(196,100%,95%,1)]" : "",
                                        ]
                                            .filter(Boolean)
                                            .join(" ")
                                    }
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium text-gray-900">
                                            {option.short_code} - {option.english_name}
                                        </span>
                                        <span className="text-xs text-[hsla(222,5%,42%,1)]">
                                            {option.code_state}
                                        </span>
                                    </div>
                                </ComboboxOption>
                            ))
                        )}
                    </ComboboxOptions>
                </Transition>
            </div>
        </Combobox>
    );
};

export default LocationCombobox;

