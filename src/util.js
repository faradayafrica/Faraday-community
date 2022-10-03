import Airtable from "airtable";

export const base = new Airtable({
  apiKey: process.env.REACT_APP_API_KEY,
}).base(process.env.REACT_APP_BASE);

export const FARADAY_ABOUT_URL = "https://about.faraday.africa/"