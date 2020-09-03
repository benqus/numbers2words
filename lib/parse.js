"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numerals_1 = __importDefault(require("./numerals"));
var format_1 = __importDefault(require("./format"));
function getTens(number) {
    var tens = Math.floor(number / 10) * 10;
    var words = [numerals_1.default[tens]];
    var num = number - tens;
    if (num > 0) {
        words.push(numerals_1.default[num]);
    }
    return words.join('-');
}
function getHundreds(n) {
    var hundreds = Math.floor(n / 100);
    var remainder = n - (hundreds * 100);
    var words = [numerals_1.default[hundreds] + " hundred"];
    if (remainder > 0) {
        return words.concat(parse(remainder));
    }
    return words;
}
function getThousands(n) {
    var thousands = Math.floor(n / 1000);
    var remainder = n - (thousands * 1000);
    var word = numerals_1.default[thousands] || getTens(thousands) || getHundreds(thousands);
    var words = [word + " thousand"];
    if (remainder > 0) {
        return words.concat(parse(remainder));
    }
    return words;
}
function parse(n) {
    if (n === void 0) { n = 0; }
    if (numerals_1.default[n])
        return numerals_1.default[n];
    if (n < 100)
        return getTens(n);
    if (n < 1000)
        return getHundreds(n);
    if (n < 1000000)
        return getThousands(n);
}
function default_1(n) {
    if (n === void 0) { n = 0; }
    if (n < 0 || n > 100000) {
        throw new Error('Number out of range');
    }
    return format_1.default(parse(n));
}
exports.default = default_1;
