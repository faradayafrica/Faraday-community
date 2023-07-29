import Airtable from 'airtable';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
}).base(process.env.NEXT_PUBLIC_BASE!);

export const FARADAY_ABOUT_URL = 'https://about.faraday.africa/';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
