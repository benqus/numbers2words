"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parse_1 = __importDefault(require("./parse"));
var _a = process.argv, _b = _a[2], number = _b === void 0 ? '0' : _b;
var parsedNr = parseInt(number);
if (isNaN(parsedNr) || typeof parsedNr !== 'number') {
    // exception for the world to come to a screetching halt!
    throw new TypeError('Please provide a number between 0 and 100000');
}
var parsed = parse_1.default(parsedNr);
console.log(parsed);
