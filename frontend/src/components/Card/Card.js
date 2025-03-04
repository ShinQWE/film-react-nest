"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = Card;
const clsx_1 = __importDefault(require("clsx"));
const Card_module_scss_1 = __importDefault(require("./Card.module.scss"));
function Card(_a) {
    var { id, image, title, className } = _a, props = __rest(_a, ["id", "image", "title", "className"]);
    return (<button data-id={id} {...props} className={(0, clsx_1.default)(Card_module_scss_1.default.card, className)}>
            <img className={Card_module_scss_1.default.image} src={image} alt={title}/>
            <span className={Card_module_scss_1.default.text}>{title}</span>
        </button>);
}
