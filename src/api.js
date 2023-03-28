import { apiConfig } from "./config.js";
import axios from "axios";

export const getOutages = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${apiConfig.BASE_URL}/outages`,
      headers: {
        "X-Api-Key": apiConfig.API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getSiteInfo = async (id) => {
  try {
    const response = await axios({
      method: "get",
      url: `${apiConfig.BASE_URL}/site-info/${id}`,
      headers: {
        "X-Api-Key": apiConfig.API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const postFilteredData = async (siteId, data) => {
  try {
    const response = await axios({
      method: "post",
      url: `${apiConfig.BASE_URL}/site-outages/${siteId}`,
      data: data,
      headers: {
        "X-Api-Key": apiConfig.API_KEY,
      },
    });
    return response.status;
  } catch (error) {
    console.log("Error: ", error.response);
  }
};
