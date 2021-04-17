const mongoose = require("mongoose");
const geoInfoSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

//collection in db will be called geoInfo
const geoInfoModel = mongoose.model("geoInfo", geoInfoSchema);

module.exports = geoInfoModel;

// the_date: newDate,
// the_place:
//   geo_data.postalCodes[0].placeName +
//   ", " +
//   geo_data.postalCodes[0].adminName1,
// the_latitude: geo_data.postalCodes[0].lat,
// the_longitude: geo_data.postalCodes[0].lng,
// the_country: geo_data.postalCodes[0].countryCode,
