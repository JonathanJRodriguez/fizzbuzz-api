const ExplorerService = require("../../lib/services/ExplorerService");
const Reader = require("../../lib/utils/Reader");
        

describe("Unit tests for Explorer Service", () => {
    test("Use the explorer Service", () => {
        const explorers = Reader.readJsonFile("./test/data/test-data.json");
        expect(ExplorerService.filterByMission(explorers, "node").length).toBe(10);
        expect(ExplorerService.getAmountOfExplorersByMission(explorers, "node")).toBe(10);
        expect(ExplorerService.getExplorersUsernamesByMission(explorers, "node").length).toBe(10);
    });
});