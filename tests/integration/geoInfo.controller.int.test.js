const request = require("supertest");
const app = require("../../app");
const test_data = require("../../mock-data/new-geoInfo.json");

const endPointUrl = "/myroutes/";

describe(endPointUrl, () => {
  it("POST " + endPointUrl, async () => {
    const response = await request(app).post(endPointUrl).send(test_data);
    expect(response.statusCode).toBe(201);
    expect(response.latitude).toBe(test_data.latitude);
    expect(response.longitude).toBe(test_data.longitude);
  });
});

// {
//     "place": "Test City, Test Province",
//       "latitude": 43.672276,
//       "longitude":
//         -79.28744,
//       "country": "CA"
// }
