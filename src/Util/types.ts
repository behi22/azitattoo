import { LocationT } from '../Redux/features/location/location-slice';
import { Benefit } from '../Redux/features/benefit/benefit-slice';

export type LocationHoursProps = {
  locations: LocationT[];
};

export type BenefitsProps = {
  benefits: Benefit[];
};

export type Service = {
  id: number;
  img: string;
  button: string;
  title: string;
  description: string;
  link: string;
};

export type BookingDateAndTime = {
  date: string;
  time: string;
};

export type ServicesProps = {
  services: Service[];
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
