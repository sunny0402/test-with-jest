const geoInfoModel = require("../model/geoInfo.model");
exports.createGeoInfo = async (req, resp, next) => {
  //create new entry in MongoDB with the incoming request data
  const createdModel = await geoInfoModel.create(req.body);

  //response sent when client hits endpoint
  // resp.status(201).send();

  //send response with data
  resp.status(201).json(createdModel);
};

// place: {
//     type: String,
//     required: true,
//   },
//   latitude: {
//     type: Number,
//     required: true,
//   },
//   longitude: {
//     type: Number,
//     required: true,
//   },
//   country: {
//     type: String,
//     required: true,
//   },
