const geoInfoController = require("../../controllers/geoInfo.controller");
const geoInfoModel = require("../../model/geoInfo.model");
const httpMocks = require("node-mocks-http");
const newData = require("../../mock-data/new-geoInfo.json");

//this mock function overrides the original (we do not call the original fn in the tests)
//out intention is NOT to test the MongoDB function create(), we expect that to already work
geoInfoModel.create = jest.fn();

let req, resp, next;
beforeEach(() => {
  //create mock request response objects which come with Express endpoint
  req = httpMocks.createRequest();
  resp = httpMocks.createResponse();
  next = null;
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
    req.body = newData;
    geoInfoController.createGeoInfo(req, resp, next);
    // expect(geoInfoModel.create).toBeCalled();
    expect(geoInfoModel.create).toBeCalledWith(newData);
  });

  //when create new resourse in REST get 201 code and json of resourse
  it("should return response code 201", () => {
    req.body = newData;
    geoInfoController.createGeoInfo(req, resp, next);
    expect(resp.statusCode).toBe(201);
    expect(resp._isEndCalled()).toBeTruthy();
  });
  //does the endpoint return the json which came in the requet
  it("should return json body in response", () => {
    geoInfoModel.create.mockReturnValue(newData);
    geoInfoController.createGeoInfo(req, resp, next);
    // expect(resp._getJSONData()).toBe(newData);
    expect(resp._getJSONData()).toStrictEqual(newData);
  });
});
