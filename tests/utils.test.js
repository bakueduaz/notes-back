const { sum } = require("../srs/utils/calculate.util");
const { encodePayload, decodePayload } = require("../src/utils/jwt.util")

test("should return 4", () => {
    expect(sum(1, 3)).toBe(4);
});


let encodePayloadMock = jest.mock(encodePayload);
describe("HWT utils", () => {
    it("should encode payload", () => {
        const payload = { id: 1 };
        let encodedData = encodePayloadMock(payload);
        expect(encodedData.mock.calls).toHaveLength(1);
    });
});