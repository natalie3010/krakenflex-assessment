import dotenv from "dotenv";

dotenv.config();

export const apiConfig = {
  API_KEY: process.env.API_KEY,
  BASE_URL: `https://api.krakenflex.systems/interview-tests-mock-api/v1`,
};
