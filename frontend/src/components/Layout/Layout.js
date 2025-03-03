"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = Layout;
const clsx_1 = __importDefault(require("clsx"));
const Layout_module_scss_1 = __importDefault(require("./Layout.module.scss"));
function Layout({ children, isLocked }) {
    return (<div className={(0, clsx_1.default)(Layout_module_scss_1.default.wrapper, {
            [Layout_module_scss_1.default.locked]: isLocked,
        })}>
            {children}
        </div>);
}
