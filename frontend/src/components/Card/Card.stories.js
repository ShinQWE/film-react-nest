"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const Card_1 = require("./Card");
const constants_ts_1 = require("../../utils/constants.ts");
const meta = {
    title: 'UI/Card',
    component: Card_1.Card,
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
        image: `${constants_ts_1.CDN_URL}/bg1s.jpg`,
        text: 'Архитекторы общества',
    },
};
