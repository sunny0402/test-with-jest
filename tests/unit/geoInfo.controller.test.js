const geoController = require("../../controllers/geoInfo.controller");

describe("todoController.createTodo", () => {
  it("should have createGeoInfo function", () => {
    expect(typeof geoController.createGeoInfo).toBe("function");
  });
});
