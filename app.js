/* Global Variables */
const fetch = require("node-fetch");
const base_url = "http://api.geonames.org/";
const user_name = "sunnycodes";

let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

const express = require("express");

const app = express();
const mongodb = require("./mongodb/mongodb.connect");
mongodb.connect();

//parse json and put into request body of controller
//const createdModel = await geoInfoModel.create(req.body);
app.use(express.json());

const myRoutes = require("./routes/geoInfo.routes");
app.use("/myroutes", myRoutes);

// app.post("/", (req, resp) => {
//   //   resp.send("Hello World");
//   resp.json({ 0: "Hello World!", 1: "Hello Again", 2: "Hello Hello" });
// });

//POST route: will receive input from client
// app.get("/geoNamesReq", findInfo);
// app.get("/geoNamesReq", findInfo);

// async function findInfo(req, resp) {
//   //TODO: validate req.body
//   try {
//     let request_url =
//       base_url +
//       `findNearbyPostalCodesJSON?placename=Toronto&country=CA&radius=10&username=` +
//       `${user_name}`;
//     const response = await fetch(request_url);
//     console.log("findInfo | response  \n", response);

//     const geo_data = await response.json();
//     //console.log("findInfo | response.json() \n", geo_data);
//     console.log(
//       "findInfo | geo_data.postalCodes[0] \n",
//       geo_data.postalCodes[0]
//     );

//     let data2save = {
//       the_date: newDate,
//       the_place:
//         geo_data.postalCodes[0].placeName +
//         ", " +
//         geo_data.postalCodes[0].adminName1,
//       the_latitude: geo_data.postalCodes[0].lat,
//       the_longitude: geo_data.postalCodes[0].lng,
//       the_country: geo_data.postalCodes[0].countryCode,
//     };
//     console.log("findInfo | data2save \n", data2save);
//     resp.send(data2save);
//   } catch (error) {
//     console.log("getWeather: error\n", error);
//   }
// }

module.exports = app;

//NOTES:
//http://api.geonames.org/findNearbyPostalCodesJSON?postalcode=8775&country=CH&radius=10&username=sunnycodes
//api.geonames.org/findNearbyPostalCodesJSON?placename=Toronto&radius=10&username=sunnycodes
//http: const a_response = {
//   postalCodes: [
//     {
//       adminCode2: "207",
//       adminCode1: "KS",
//       adminName2: "Woodson",
//       lng: -95.936818,
//       distance: "0",
//       countryCode: "US",
//       postalCode: "66777",
//       adminName1: "Kansas",
//       placeName: "Toronto",
//       lat: 37.795343,
//     },
//   ],
// };
