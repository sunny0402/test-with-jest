const request = require("supertest");
const app = require("../../app");
const test_data = require("../../mock-data/new-geoInfo.json");

const endPointUrl = "/myroutes/";

describe(endPointUrl, () => {
  afterAll(async () => {
    await connection.close();
    // await db.close();
    db.disconnect();
  });
  it("POST " + endPointUrl, async () => {
    const response = await request(app).post(endPointUrl).send(test_data);
    //console.log("integration test response ...", response);

    expect(response.statusCode).toBe(201);
    expect(response.body.country).toBe(test_data.country);
    expect(response.body.longitude).toBe(test_data.longitude);
    expect(response.body.population).toEqual(test_data.population);
  });
});

// {
//     "place": "Test City, Test Province",
//       "latitude": 43.672276,
//       "longitude":
//         -79.28744,
//       "country": "CA"
// }
