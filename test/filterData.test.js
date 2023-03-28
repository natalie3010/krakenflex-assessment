import { filteredDate, filteredDevice } from "../src/filterData";

jest.mock("axios");

const outages = [
  {
    id: "test1",
    begin: new Date("2018-03-22"),
    end: new Date("2023-03-28"),
  },
  {
    id: "test2",
    begin: new Date("2022-09-02"),
    end: new Date("2023-03-28"),
  },
];
const sites = [
  { id: "test1", name: "test1Name" },
  { id: "test3", name: "test3Name" },
];

describe("test date and device filtering", () => {
  it("filters out outages with begin dates prior to 2022-01-01", () => {
    const updatedData = filteredDate(outages);
    expect(updatedData).toEqual([
      {
        id: "test2",
        begin: new Date("2022-09-02"),
        end: new Date("2023-03-28"),
      },
    ]);
  });

  it("returns an empty array if there are no outages", () => {
    const outages = [];

    const updatedData = filteredDate(outages);
    expect(updatedData).toEqual([]);
  });

  it("filters out outages if device id not accepted", () => {
    const updatedData = filteredDevice(outages, sites);
    expect(updatedData).toEqual([
      {
        id: "test1",
        begin: new Date("2018-03-22"),
        end: new Date("2023-03-28"),
      },
    ]);
  });
});
