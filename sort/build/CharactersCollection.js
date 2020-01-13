"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLocaleLowerCase() >
            this.data[rightIndex].toLocaleLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split("");
        var leftHand = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = leftHand;
        this.data = chars.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
