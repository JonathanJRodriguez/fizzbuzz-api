const FizzbuzzService = require("../../lib/services/FizzbuzzService");

describe("Unit tests for Fizzbuzz Service", () => {
    test("Use the Fizzbuzz Service", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        expect(FizzbuzzService.applyValidationInExplorer(explorer1)).toStrictEqual({name: "Explorer1", score: 1, trick: 1});
        const explorer3 = {name: "Explorer3", score: 3};
        expect(FizzbuzzService.applyValidationInExplorer(explorer3)).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
        const explorer5 = {name: "Explorer5", score: 5};
        expect(FizzbuzzService.applyValidationInExplorer(explorer5)).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
        const explorer15 = {name: "Explorer15", score: 15};
        expect(FizzbuzzService.applyValidationInExplorer(explorer15)).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});    
        
        expect(FizzbuzzService.applyValidationInNumber(1)).toBe(1);
        expect(FizzbuzzService.applyValidationInNumber(3)).toBe("FIZZ");
        expect(FizzbuzzService.applyValidationInNumber(5)).toBe("BUZZ");
        expect(FizzbuzzService.applyValidationInNumber(15)).toBe("FIZZBUZZ");
    });
});