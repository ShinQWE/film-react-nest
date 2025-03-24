"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const ModalHeader_1 = require("./ModalHeader");
const meta = {
    title: 'UI/ModalHeader',
    component: ModalHeader_1.ModalHeader,
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
    },
};
