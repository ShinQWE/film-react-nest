"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
const test_1 = require("@storybook/test");
const Basket_1 = require("./Basket");
const meta = {
    title: 'UI/Basket',
    component: Basket_1.Basket,
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
        items: [
            {
                id: '1',
                place: 'A1',
                session: '10:00',
                price: '1000 ₽',
            },
            {
                id: '2',
                place: 'A2',
                session: '10:00',
                price: '1000 ₽',
            },
            {
                id: '3',
                place: 'A3',
                session: '10:00',
                price: '1000 ₽',
            },
        ]
    },
};
