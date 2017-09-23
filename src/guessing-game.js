class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    middle() { 
    	return Math.ceil((this.max + this.min)/2);
    }

    guess() {
    	return this.middle();
    }

    lower() {
    	this.max = this.middle();
    }

    greater() {
    	this.min = this.middle();
    }
}

module.exports = GuessingGame;
