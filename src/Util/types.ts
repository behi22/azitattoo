export type BookingDateAndTime = {
  date: string;
  time: string;
};

export type ServiceProps = {
  mainTitle: string;
  title: string;
  description: string;
};

export type Booking = {
  service: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  id: string;
} & BookingDateAndTime;
