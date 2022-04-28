const Reader = require("../../lib/utils/Reader");

describe("Unit tests for Reader class", () => {
    test("Create a Reader object", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers.length).toBe(15);
    });
});