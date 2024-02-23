require("dotenv").config();

const config = {
  api_key: process.env.API_KEY || "",
  secret: process.env.SERVER_SECRET || "",
  is_kalvian: process.env.IS_KALVIAN === "true",
};

module.exports = config;
