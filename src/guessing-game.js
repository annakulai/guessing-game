class GuessingGame {
    constructor() {
        this.guessingNumber = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.guessingNumber = this.min + Math.round((this.max - this.min) / 2);
    }

    lower() {
        this.max = this.guessingNumber;
    }

    greater() {
        this.min = this.guessingNumber;
    }
}

module.exports = GuessingGame;
