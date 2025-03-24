"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const Ticket_1 = require("./Ticket");
const meta = {
    title: 'UI/Ticket',
    component: Ticket_1.Ticket,
    parameters: {
        layout: 'centered',
    },
    args: {
        onDelete: (0, test_1.fn)(),
    },
};
exports.default = meta;
exports.Default = {
    args: {
        place: 'A1',
        session: '10:00',
        price: '1000 ₽',
    },
};
