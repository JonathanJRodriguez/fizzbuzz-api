class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        if(explorer.score%3 === 0){
            if(explorer.score%5 === 0){
                explorer.trick = "FIZZBUZZ";
                return explorer;
            }
            explorer.trick = "FIZZ";
            return explorer;
        }else if(explorer.score%5 === 0){
            explorer.trick = "BUZZ";
            return explorer;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }
}

module.exports = FizzbuzzService;