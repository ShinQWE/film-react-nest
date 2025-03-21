"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const Button_1 = require("./Button");
const meta = {
    title: 'UI/Button',
    component: Button_1.Button,
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
        label: 'Button',
    },
};
