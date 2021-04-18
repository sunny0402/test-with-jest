## Geonames

http://www.geonames.org/export/web-services.html

api.geonames.org/findNearbyPostalCodesJSON?postalcode=8775&country=CH&radius=10&username=demo

Test runner which always runs
'''
"test": "jest --watchAll"
'''

http://mongoosejs.com/docs/jest.html

'''
module.exports = {
testEnvironment: 'node'
};
'''

https://github.com/howardabrams/node-mocks-http
'''
const httpMocks = require("node-mocks-http");
'''

## Notes

serializes to the same string. Means same string, but different spot in memory.
To pass test change from toBe to toStrictEqual.

TypeError: app.address is not a function
module.exports = app;
