import axios from "axios";
import { API_URL } from "./config";

export const fetchAllClubsLogo = () =>
  axios.get(`${API_URL}/clubs/with-logo`, {});
