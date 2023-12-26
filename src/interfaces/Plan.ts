import { Dispatch, SetStateAction } from "react";

export interface Plan {
  name:        string;
  price:       Price;
  description: string;
  descount:    number;
  includes:    string[];
}

export interface CommuneData {
  id:       string;
  name:     string;
  audience: number;
  price:    Price;
}

export interface Price {
  monthly: number;
  annual:  number;
}


export interface HeadCell {
  disablePadding: boolean;
  // id: keyof CommuneData;
  id: string;
  label: string;
  numeric: boolean;
}

export interface TableProps {
  communes: CommuneData[],
  setcommunesSelected: Dispatch<SetStateAction<number>>,
  setAudience: Dispatch<SetStateAction<number>>,
  setMonthlyValue: Dispatch<SetStateAction<number>>,
  setAnnualValue: Dispatch<SetStateAction<number>>,
}

