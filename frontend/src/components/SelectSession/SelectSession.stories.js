/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable storybook/default-exports */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const SelectSession_1 = require("./SelectSession");
const meta = {
    title: 'UI/SelectSession',
    component: SelectSession_1.SelectSession,
    parameters: {
        layout: 'centered',
    },
    args: {
        onSelect: (0, test_1.fn)(),
    },
};
exports.default = meta;
exports.Default = {
    selected: null,
    args: {
        sessions: [
            {
                id: '1',
                day: 'Monday',
                time: '10:00',
            },
            {
                id: '1',
                day: 'Monday',
                time: '12:00',
            },
            {
                id: '2',
                day: 'Tuesday',
                time: '11:00',
            },
            {
                id: '3',
                day: 'Wednesday',
                time: '12:00',
            },
        ]
    },
};
