"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchanger = void 0;
class exchanger {
    constructor(gold, silver, copper) {
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }
    toCopper() {
        const goldToCopper = (this.gold * 20) * 12;
        const silverToCopper = this.silver * 12;
        return goldToCopper + silverToCopper + this.copper;
    }
}
exports.exchanger = exchanger;
