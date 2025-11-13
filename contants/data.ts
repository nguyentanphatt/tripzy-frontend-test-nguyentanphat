import busIcon from "@/public/bus.svg";
import hotelIcon from "@/public/hotel.svg";
import flightIcon from "@/public/fly.svg";

export const locations = [
  {
    short_code: "MD",
    english_name: "Moldova, Republic of",
    code_state: "+373 - Moldova, Republic of",
  },
  { short_code: "MC", english_name: "Monaco", code_state: "+377 - Monaco" },
  {
    short_code: "AN",
    english_name: "Netherlands Antilles",
    code_state: "+599 - Netherlands Antilles",
  },
  {
    short_code: "NC",
    english_name: "New Caledonia",
    code_state: "+687 - New Caledonia",
  },
  {
    short_code: "NZ",
    english_name: "New Zealand",
    code_state: "+64 - New Zealand",
  },
  { short_code: "NU", english_name: "Niue", code_state: "+683 - Niue" },
  {
    short_code: "NF",
    english_name: "Norfolk Island",
    code_state: "+672 - Norfolk Island",
  },
  {
    short_code: "MP",
    english_name: "Northern Mariana Islands",
    code_state: "+1 670 - Northern Mariana Islands",
  },
];

export const transportData = [
  {
    id: "bus",
    icon: busIcon,
    iconCircleBg: "bg-[hsla(196,100%,91%,1)]",
    bgColor: "bg-[hsla(198,100%,96%,1)]",
    hoverColor: "hover:bg-[hsla(198,100%,96%,1)]",
  },
  {
    id: "hotel",
    icon: hotelIcon,
    iconCircleBg: "bg-[hsla(84,85%,89%,1)]",
    bgColor: "bg-[hsla(92,100%,96%,1))]",
    hoverColor: "hover:bg-[hsla(92,100%,96%,1))]",
  },
  {
    id: "flight",
    icon: flightIcon,
    iconCircleBg: "bg-[hsla(215,94%,94%,1)]",
    bgColor: "bg-[hsla(213,100%,96%,1)]",
    hoverColor: "hover:bg-[hsla(213,100%,96%,1)]",
  },
];
