import axios from "axios";
import { appID, api_Key } from "./APIKeys";

const resultsPerPage = 50;

const corsURL = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/";
const baseURL = "http://api.adzuna.com/v1/api/jobs/gb/search/1?what=";

const API_KEY = `&app_key=${api_Key}`;
const APP_ID = `&app_id=${appID}`;
const results_amount = `&results_per_page=${resultsPerPage}`;
const content_type = "&content-type=application/json";
const max_days_old = "&max_days_old=30";
const sort_by = "&sort_by=date";
// https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=07eb7ed2&app_key={YOUR API ID}&results_per_page=50&max_days_old=30&sort_by=date
//http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id={YOUR API ID}&app_key={YOUR API KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json

export default {
  async search(query, location) {
    const encodedLocation = encodeURIComponent(location);
    console.log(
      corsURL +
      baseURL +
      query +
      API_KEY +
      APP_ID +
      results_amount +
      max_days_old +
      sort_by +
      "&where=" +
      encodedLocation +
      content_type
    );
    return await axios.get(
      corsURL +
      baseURL +
      query +
      API_KEY +
      APP_ID +
      results_amount +
      max_days_old +
      sort_by +
      "&where=" +
      encodedLocation +
      content_type
    );
  },
};

// export default search;
