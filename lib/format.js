"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function format(words) {
    if (Array.isArray(words)) {
        if (words.length > 1) {
            var last = words.pop();
            words.push("and " + last);
        }
        return words.join(' ');
    }
    return words;
}
exports.default = format;
