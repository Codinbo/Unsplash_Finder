import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Hkm_Mhnwj8Q_UHyp1uSV6XsZVcRXy_o7Qb2QJD2lhjU",
  },
});
