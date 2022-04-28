const Reader = require("../../../lib/utils/Reader");

describe("Reader", () => {
    test("Debe leer un archivo JSON", () => {
        const data = Reader.readJsonFile("./visualpartners.json");
        expect(data.length).toBe(51);
    });
});