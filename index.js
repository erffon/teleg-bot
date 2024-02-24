require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
axios = require("axios");

const { TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;

const WEBHOOK_URL = SERVER_URL + URI;

const app = express();
app.use(bodyParser.json());

const init = async () => {
  const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`);
  console.log(res.data);
};

app.listen(process.env.PORT || 5000, async () => {
  console.log(`👻 app running on: http://localhost:${process.env.PORT}/`);
  await init();
});
