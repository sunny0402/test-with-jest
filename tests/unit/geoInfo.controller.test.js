const geoInfoController = require("../../controllers/geoInfo.controller");
const geoInfoModel = require("../../model/geoInfo.model");
const httpMocks = require("node-mocks-http");
const newData = require("../../mock-data/new-geoInfo.json");
//const newData1 = require("../../mock-data/new-geoInfo-1.json");

//this mock function overrides the original (we do not call the original fn in the tests)
//out intention is NOT to test the MongoDB function create(), we expect that to already work
geoInfoModel.create = jest.fn();

let req, resp, next;
beforeEach(() => {
  //create mock request response objects which come with Express endpoint
  req = httpMocks.createRequest();
  resp = httpMocks.createResponse();
  //with jest.fn() can spy on method and see what it is being called with
  next = jest.fn();
});

describe("geoInfoController.createGeoInfo", () => {
  beforeEach(() => {
    //our mock-data
    req.body = newData;
  });
  it("should have createGeoInfo function", () => {
    expect(typeof geoInfoController.createGeoInfo).toBe("function");
  });

  it("should call geoInfoModel.create", () => {
    //assign mock data to the request body
    //req.body = newData;
    geoInfoController.createGeoInfo(req, resp, next);
    // expect(geoInfoModel.create).toBeCalled();
    expect(geoInfoModel.create).toBeCalledWith(newData);
  });

  //when create new resourse in REST get 201 code and json of resourse
  it("should return response code 201", async () => {
    //req.body = newData;
    await geoInfoController.createGeoInfo(req, resp, next);
    expect(resp.statusCode).toBe(201);
    expect(resp._isEndCalled()).toBeTruthy();
  });
  //does the endpoint return the json which came in the requet
  it("should return json body in response", async () => {
    geoInfoModel.create.mockReturnValue(newData);
    await geoInfoController.createGeoInfo(req, resp, next);
    expect(resp._getJSONData()).toEqual(newData);

    //make test fail uncomment below
    //expect(resp._getJSONData()).toEqual(newData1);
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "a property missing." };
    const rejectedPromise = Promise.reject(errorMessage);
    geoInfoModel.createGeoInfo.mockResponseValue(rejectedPromise);
    await geoInfoController.createGeoInfo(req, resp, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
