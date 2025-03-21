"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const Header_1 = require("./Header");
const meta = {
    title: 'UI/Header',
    component: Header_1.Header,
    parameters: {
        layout: 'centered',
    },
    args: {
        onClick: (0, test_1.fn)()
    },
};
exports.default = meta;
exports.Default = {
    args: {
        counter: 3,
    },
};
