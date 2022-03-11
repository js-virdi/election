var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
	var electionInstance;
	it("initializes with 2 candidates", function(){
		return Election.deployed().then(function(instance){
			return instance.candidateCount();
		}).then(function(count){
			assert.equal(count,2);
		});
	});


	it("initializes candidates with correct values", function(){
		return Election.deployed().then(function(instance){
			electionInstance = instance;
			return electionInstance.candidates(1);
		}).then(function(candidate){
			assert.equal(candidate[0],1,"contains the correct id");
			assert.equal(candidate[1],"candidate1","contains the correct name");
			assert.equal(candidate[2],0,"contains the correct votes");
			return electionInstance.candidates(2);
		}).then(function(candidate){
			assert.equal(candidate[0],2,"contains the correct id");
			assert.equal(candidate[1],"candidate2","contains the correct name");
			assert.equal(candidate[2],0,"contains the correct votes");
		});
	});
});