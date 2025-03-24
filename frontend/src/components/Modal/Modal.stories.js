"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.Default = void 0;
const test_1 = require("@storybook/test");
const Modal_1 = require("./Modal");
const meta = {
    title: 'UI/Modal',
    component: Modal_1.Modal,
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        onClose: (0, test_1.fn)(),
        header: 'Header',
        actions: 'Actions',
        children: 'Children',
        isPortal: false
    },
};
exports.default = meta;
exports.Default = {
    args: {
        message: 'Message',
        isError: false
    }
};
exports.Error = {
    args: {
        message: 'Error message',
        isError: true
    }
};
