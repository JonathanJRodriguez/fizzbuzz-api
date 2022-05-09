const Reader = require("../../lib/utils/Reader");
const ExplorerService = require("../../lib/services/ExplorerService");
const FizzbuzzService = require("../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(explorers, mission);        
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }
    static getFizzbuzzByNumber(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
    static chatBot(param){
        const numberToApplyFb = parseInt(param);
        if(!isNaN(numberToApplyFb)){
            const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(param);
            const responseBot = `Tu número es: ${param}. Validación: ${fizzbuzzTrick}`;
            return responseBot;
        }
        else {
            if(param.toLowerCase() == "node" || param.toLowerCase() == "java"){
                return this.getExplorersUsernamesByMission(param.toLowerCase()).toString();
            }
           return "Envía un número o misión válido";
        }
    }
}

module.exports = ExplorerController;