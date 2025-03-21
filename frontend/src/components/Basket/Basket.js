"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = Basket;
const Basket_module_scss_1 = __importDefault(require("./Basket.module.scss"));
const Ticket_tsx_1 = require("../Ticket/Ticket.tsx");
function Basket({ items, onDelete }) {
    return (<div className={Basket_module_scss_1.default.basket}>
            {items.map((item) => <Ticket_tsx_1.Ticket key={item.id} place={item.place} session={item.session} price={item.price} onDelete={() => onDelete(item.id)}/>)}
        </div>);
}
