export interface FormInterface {
  date: Date | undefined;
  timeSlot: string;
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface LocationCardProps {
  state: string;
  address: string;
  contact: string;
  consultation: string;
  map: React.ReactNode;
  featured?: boolean;
}
