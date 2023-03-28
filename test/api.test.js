import { getOutages, getSiteInfo, postFilteredData } from "../src/api";
import { apiConfig } from "../src/config";
import axios from "axios";

jest.mock("axios");

describe("test getOutages", () => {
  it("fetches data successfully from API", async () => {
    const data = {
      data: {
        id: "test-id",
        begin: "2021-07-26T17:09:31.036Z",
        end: "2021-08-29T00:37:42.253Z",
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data.data));

    await expect(getOutages()).resolves.toEqual(data.data);

    expect(axios.get).toHaveBeenCalledWith(`${apiConfig.BASE_URL}/outages`);
  });

  it("Throws an error when API sends nothing back", async () => {
    const e = "error message";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(e)));

    await expect(getOutages()).rejects.toThrow(e);
  });
});
