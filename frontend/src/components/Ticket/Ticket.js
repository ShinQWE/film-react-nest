"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = Ticket;
const Ticket_module_scss_1 = __importDefault(require("./Ticket.module.scss"));
const clsx_1 = __importDefault(require("clsx"));
function Ticket({ place, session, price, className, onDelete }) {
    return (<div className={(0, clsx_1.default)(Ticket_module_scss_1.default.ticket, className)}>
            <div className={Ticket_module_scss_1.default.info}>
                <strong className={Ticket_module_scss_1.default.place}>{place}</strong>
                <span className={Ticket_module_scss_1.default.session}>{session}</span>
            </div>
            <div>
                <strong className={Ticket_module_scss_1.default.price}>{price}</strong>
                <span>С учетом НДС</span>
            </div>
            <button onClick={onDelete} className={Ticket_module_scss_1.default.delete} aria-label="delete"></button>
        </div>);
}
