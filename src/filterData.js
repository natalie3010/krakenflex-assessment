/* Filters out any outages that began before `2022-01-01T00:00:00.000Z` */

export const filteredDate = (outages) => {
  const startDate = new Date("2022-01-01");

  const resultOutageData = outages.filter((a) => {
    const date = new Date(a.begin);
    return date >= startDate;
  });
  return resultOutageData;
};

/* Filters out any outages that don't have an ID that is in the list of
devices in the site information
*/

export const filteredDevice = (filteredOutage, siteDeviceInfo) => {
  const filteredArray = filteredOutage.filter((entry1) =>
    siteDeviceInfo.some((entry2) => entry1.id === entry2.id)
  );

  return filteredArray;
};

//////////////// TO WORK OUT HOW TO INCLUDE NAME //////////////////////////

// const dataWithName = filteredArray.map(resultOutageData => {
//     return {
//         ...resultData,
//         name: filteredDate.id[resultOutageData.id].name
//     }
// })

// console.log(dataWithName)
