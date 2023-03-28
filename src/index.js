import { getOutages, getSiteInfo, postFilteredData } from "./api.js";
import { filteredDate, filteredDevice } from "./filterData.js";

const filteredData = async (id) => {
  const outages = await getOutages();

  const siteInfo = await getSiteInfo(id);

  const siteDeviceInfo = siteInfo.devices;

  const filteredOutage = filteredDate(outages);

  const filteredArray = filteredDevice(filteredOutage, siteDeviceInfo);

  postFilteredData(siteName, filteredArray);

  console.log("final output : ", filteredArray);

  return filteredArray;
};

const siteName = "norwich-pear-tree";

filteredData(siteName);
