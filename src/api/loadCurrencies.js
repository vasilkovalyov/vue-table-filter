import axios from "axios";
import { getFormatDate } from "../utils/date";

export async function apiLoadCurrencies(date) {
  const currentDate = date ? date : getFormatDate();
  console.log("currentDate", currentDate);
  const response = await axios.get(
    `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=${currentDate}`
  );
  return response.data;
}
