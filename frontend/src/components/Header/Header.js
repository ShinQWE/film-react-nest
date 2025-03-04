"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = Header;
const Header_module_scss_1 = __importDefault(require("./Header.module.scss"));
const logo_svg_1 = __importDefault(require("../../assets/logo.svg"));
function Header({ counter, onClick }) {
    return (<header className={Header_module_scss_1.default.header}>
            <a className={Header_module_scss_1.default.logo} href="/">
                <img className={Header_module_scss_1.default.logoImage} src={logo_svg_1.default} alt="Film! logo"/>
            </a>
            <button className={Header_module_scss_1.default.basket} onClick={onClick}>
                <span className={Header_module_scss_1.default.counter}>{counter}</span>
            </button>
        </header>);
}
