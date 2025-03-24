"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const SelectPlaces_1 = require("./SelectPlaces");
const meta = {
    title: 'UI/SelectPlaces',
    component: SelectPlaces_1.SelectPlaces,
    parameters: {
        layout: 'centered',
    },
    args: {
        onSelect: (0, test_1.fn)(),
    },
};
exports.default = meta;
exports.Default = {
    args: {
        hall: {
            rows: 3,
            seats: 5
        },
        taken: ['1:1', '3:3'],
        selected: [
            { row: 2, seat: 4 },
            { row: 2, seat: 5 },
        ]
    },
};
