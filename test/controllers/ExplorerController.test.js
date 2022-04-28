const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit tests for Explorer Controller", () => {
    test("Use the Explorer Controller", () => {
        expect(ExplorerController.getExplorersByMission("node").length).toBe(10);
        expect(ExplorerController.getExplorersUsernamesByMission("node").length).toBe(10);
        expect(ExplorerController.getExplorersAmountByMission("node")).toBe(10);
        expect(ExplorerController.getFizzbuzzByNumber(1)).toBe(1);
        expect(ExplorerController.getFizzbuzzByNumber(3)).toBe("FIZZ");
        expect(ExplorerController.getFizzbuzzByNumber(5)).toBe("BUZZ");
        expect(ExplorerController.getFizzbuzzByNumber(15)).toBe("FIZZBUZZ");
    });
});