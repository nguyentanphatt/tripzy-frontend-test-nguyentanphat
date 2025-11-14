import { Dayjs } from "dayjs";
import { LocationOption } from "@/component/LocationCombobox";

export interface ValidationErrors {
  fromLocation?: string;
  toLocation?: string;
  departureDate?: string;
  returnDate?: string;
  passengers?: string;
}

export interface SearchFormData {
  fromLocation: LocationOption | null;
  toLocation: LocationOption | null;
  departureDate: Dayjs | null;
  returnDate: Dayjs | null;
  isRoundTrip: boolean;
  passengerCount: number;
}

export const validateSearchForm = (data: SearchFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.fromLocation) {
    errors.fromLocation = "Please select a departure location";
  }

  if (!data.toLocation) {
    errors.toLocation = "Please select a destination location";
  }

  if (!data.departureDate) {
    errors.departureDate = "Please select a departure date";
  } else if (!data.departureDate.isValid()) {
    errors.departureDate = "Please select a valid departure date";
  }

  if (data.isRoundTrip) {
    if (!data.returnDate) {
      errors.returnDate = "Please select a return date";
    } else if (!data.returnDate.isValid()) {
      errors.returnDate = "Please select a valid return date";
    } else if (data.departureDate && data.returnDate.isBefore(data.departureDate, "day")) {
      errors.returnDate = "Return date must be on or after the departure date";
    }
  }

  if (data.passengerCount < 1) {
    errors.passengers = "Number of passengers must be at least 1";
  }

  return errors;
};

export const isFormValid = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length === 0;
};

export const getFirstError = (errors: ValidationErrors): string | null => {
  const firstKey = Object.keys(errors)[0];
  return firstKey ? errors[firstKey as keyof ValidationErrors] || null : null;
};

