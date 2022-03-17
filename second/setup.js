"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exchanger_1 = require("./exchanger");
console.log("hello");
let d = document;
initEventListener();
function initEventListener() {
    const btn = d.getElementById("exchange");
    const resultTxt = d.getElementById("result");
    if (btn !== null) {
        if (btn instanceof HTMLButtonElement) {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopPropagation();
                const ex = new exchanger_1.exchanger(getGold(), getSilver(), getCopper());
                if (resultTxt !== null) {
                    resultTxt.innerText = `${ex.toCopper()}`;
                }
            });
        }
        else {
            throw new Error(`HTML element for exchange is not found`);
        }
    }
    else {
        throw new Error(`Button exchange not found`);
    }
}
function getCopper() {
    const copper = d.getElementById("copper");
    if (copper != null && copper instanceof HTMLInputElement) {
        return copper.valueAsNumber;
    }
    else {
        throw new Error(`HTML element is null or wrong type`);
    }
}
function getSilver() {
    const silver = d.getElementById("silver");
    if (silver != null && silver instanceof HTMLInputElement) {
        return silver.valueAsNumber;
    }
    else {
        throw new Error(`HTML element is null or wrong type`);
    }
}
function getGold() {
    const gold = d.getElementById("gold");
    if (gold != null && gold instanceof HTMLInputElement) {
        return gold.valueAsNumber;
    }
    else {
        throw new Error(`HTML element is null or wrong type`);
    }
}
