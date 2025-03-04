"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const Message_tsx_1 = require("./Message.tsx");
const meta = {
    title: 'UI/Message',
    component: Message_tsx_1.Message,
    parameters: {
        layout: 'centered',
    },
    args: {
        onClick: (0, test_1.fn)(),
    },
};
exports.default = meta;
exports.Default = {
    args: {
        title: 'Title',
        description: 'Description',
        action: 'Action',
    },
};
