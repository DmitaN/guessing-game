class GuessingGame {
    constructor() {
        this.assumptions = []
        this.min = 0
        this.max = 0
        this.middle = 0
    }

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.middle = Math.round((this.max - this.min) / 2) + this.min
        this.assumptions.push(this.middle)
        return this.middle
    }

    lower() {
        this.max = this.middle
    }

    greater() {
        this.min = this.middle
    }
}

module.exports = GuessingGame;
