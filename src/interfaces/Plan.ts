export interface Plan {
  name:        string;
  price:       Price;
  description: string;
  descount:    number;
  includes:    string[];
}

export interface CommuneData {
  _id:       string;
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

