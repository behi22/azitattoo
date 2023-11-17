import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import { firestore } from '../Firebase/firebase';
import { Booking } from './types';
import dayjs from 'dayjs';
import { days, monthsShort } from './constants';
import { v4 as uuidv4 } from 'uuid';

export const isServiceChosen = (values: string[]) => {
  return !values.includes(null);
};

export const addDocWithoutId = async (tableName: string, data: any) => {
  const iCollection = collection(firestore, tableName);
  const ref = await addDoc(iCollection, data);
  return ref;
};

export const addOrEditDoc = async (
  operation: 'add' | 'edit',
  tableName: string,
  id: string,
  data: any
) => {
  const operatingFunction = operation === 'add' ? setDoc : updateDoc;
  const iCollection = collection(firestore, tableName);
  const ref = doc(iCollection, id);
  return await operatingFunction(ref, data);
};

export const fetchAllDocuments = async (table: string) => {
  const result: Booking[] = [];
  const iCollection = collection(firestore, table);
  const docs = await getDocs(iCollection);
  docs.forEach((doc) => {
    const data = doc.data() as Booking;
    result.push(data);
  });
  return result;
};

export const fetchSingleDocument = (table: string, id: string) => {
  const ref = doc(firestore, table, id);
  return getDoc(ref);
};

export const deleteDocument = async (table: string, id: string) => {
  const ref = doc(firestore, table, id);
  await deleteDoc(ref);
};

const getNextDay = (date: string) => {
  const dayjsVersion = dayjs(date, 'YYYY-MM-DD');
  const nextDay = dayjsVersion.add(1, 'day').format('YYYY-MM-DD');
  return nextDay;
};

export const isDayAvailable = (bookings: Booking[], inputDate: string) => {
  const numOfRecords = bookings.reduce((prevValue, booking) => {
    if (booking.date === inputDate) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);
  return numOfRecords !== 3;
};

export const isIdAvailable = (bookings: Booking[], inputId: string) => {
  const numOfRecords = bookings.reduce((prevValue, booking) => {
    if (booking.id === inputId) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);
  return numOfRecords !== 5;
};

export const getFirstAvailableDate = (bookings: Booking[]) => {
  let date = dayjs().add(1, 'day').format('YYYY-MM-DD');
  while (
    !isDayAvailable(bookings, date) ||
    dayjs(date, 'YYYY-MM-DD').day() === 0
  ) {
    date = getNextDay(date);
  }
  return date;
};

export const getFullDate = (date: string) => {
  const dayjsDate = dayjs(date, 'YYYY-MM-DD');
  return `${days[dayjsDate.day()]}, ${
    monthsShort[dayjsDate.month()]
  } ${dayjsDate.date()} ${dayjsDate.year()}`;
};

const locations = {
  vancouver: '642-1281 Hornby Street, Vancouver, BC',
  burnaby: '105-3939 Hastings St, Burnaby, BC'
};

export const dayToLocation = [
  null,
  locations.vancouver,
  locations.vancouver,
  locations.vancouver,
  locations.burnaby,
  locations.burnaby,
  locations.burnaby
];

export const generateUid = () => {
  return uuidv4();
};
