"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter_1 = require("../src/Greeter");
describe('Greeter', function () {
    it('Should output "Hello World"', function () {
        expect(Greeter_1.Greeter.greet()).toBe('Hello World');
    });
});
