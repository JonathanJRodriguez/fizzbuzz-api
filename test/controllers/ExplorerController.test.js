const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Unit tests for Explorer Controller", () => {
    test("Use the Explorer Controller", () => {
        const explorers = [{name:"Explorer1"}]
        expect(ExplorerController.getExplorersByMission("node").length).toBe(10);
        expect(ExplorerController.getExplorersUsernamesByMission("node").length).toBe(10);
    });
});