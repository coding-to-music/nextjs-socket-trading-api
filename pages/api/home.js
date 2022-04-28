const axios = require("axios");

export default function handler(req, res) {
  const coinMK_api_key = "793e67ba-734a-450c-8863-cab9af5f9224";
  const coinMK_domain = "https://pro-api.coinmarketcap.com";

  //   axios.get("http://webcode.me").then((resp) => {
  //     console.log(resp.data);
  //     console.log(Object.keys(resp.data).length);
  //   });

  ///cryptocurrency/quotes/latest
  console.log("im in here");
  axios
    .get(coinMK_domain + "/v1/cryptocurrency/listings/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": coinMK_api_key,
      },
    })
    .then((response) => {
      console.log("send response with data");
      //   console.log(response["data"]);
      res.send(response["data"]);
    });
}
